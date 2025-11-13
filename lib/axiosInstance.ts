/**
 * AXIOS INSTANCE
 * ==============
 * Backend API istekleri için merkezi axios yapılandırması
 * 
 * ÖZELLİKLER:
 * - Otomatik JWT token ekleme
 * - Merkezi hata yönetimi
 * - Toast mesajları ile kullanıcı bildirimleri
 * - Token süresi dolduğunda otomatik logout
 * 
 * KULLANIM:
 * import axiosInstance from '@/lib/axiosInstance';
 * 
 * const response = await axiosInstance.get('/endpoint');
 * const response = await axiosInstance.post('/endpoint', data);
 */

import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import type { ToastType } from '@/contexts/ToastContext';

// Error response type
interface ApiError {
  message: string;
  status?: number;
}

// Merkezi hata yönetimi fonksiyonu
const errorHandler = (error: AxiosError): Promise<ApiError> => {
  if (error.response) {
    const { status, data } = error.response;
    let message = (data as any)?.message || 'Bilinmeyen bir hata meydana geldi.';

    switch (status) {
      case 400:
        message = (data as any)?.message || 'Geçersiz istek.';
        break;
      case 401:
        message = 'Oturum süreniz doldu. Lütfen tekrar giriş yapın.';
        break;
      case 403:
        message = 'Bu işlem için yetkiniz bulunmuyor.';
        break;
      case 404:
        message = 'İstenen kaynak bulunamadı.';
        break;
      case 500:
        message = 'Sunucu hatası meydana geldi, lütfen daha sonra tekrar deneyin.';
        break;
      default:
        message = (data as any)?.message || 'Bilinmeyen bir hata meydana geldi.';
        break;
    }

    return Promise.reject({ message, status });
  } else if (error.request) {
    return Promise.reject({
      message: 'Sunucuya erişilemiyor. Lütfen internet bağlantınızı kontrol edin.',
    });
  } else {
    return Promise.reject({ message: `Hata: ${error.message}` });
  }
};

// Axios instance oluşturma
const axiosInstance = axios.create({
  // Environment variable veya default '/api'
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  
  maxBodyLength: Infinity,
  maxContentLength: Infinity,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // CORS / cookie ayarı
});

// Toast context (dinamik olarak ayarlanacak)
// NOT: Projenizde showToast(type, message, duration?) formatı kullanılıyor
interface ToastContextType {
  showToast: (type: ToastType, message: string, duration?: number) => void;
}

let toastContext: ToastContextType | null = null;

export const setToastContext = (context: ToastContextType) => {
  toastContext = context;
};

// JWT token eklemek için request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // localStorage'dan token al (client-side only)
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Token süresi bittiğinde bildirim göstermek için flag
let tokenExpiredNotificationShown = false;

// API yanıtlarını yönetmek için response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    // 401 Unauthorized - Token süresi dolmuş veya geçersiz
    if (error.response && error.response.status === 401) {
      if (!tokenExpiredNotificationShown && typeof window !== 'undefined') {
        tokenExpiredNotificationShown = true;

        // Toast mesajı göster (type, message sırasıyla)
        if (toastContext) {
          toastContext.showToast('error', 'Oturum süreniz doldu. Lütfen tekrar giriş yapın.');
        }

        // Token'ları temizle
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');
        localStorage.removeItem('userRole');

        // Login sayfasına yönlendir
        setTimeout(() => {
          window.location.href = '/';
          tokenExpiredNotificationShown = false; // Reset flag
        }, 2000);
      }
    } else {
      // Diğer hatalar için toast mesajı göster
      const apiError = error.response?.data as any;
      if (toastContext && apiError?.message) {
        toastContext.showToast('error', apiError.message);
      }
    }

    return errorHandler(error);
  }
);

export default axiosInstance;

