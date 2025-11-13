# 🔌 Backend Entegrasyon Rehberi

Backend'i projeye bağlamak için yapmanız gerekenler:

---

## ✅ 1. Environment Variable Ayarla

Proje kök dizininde `.env.local` dosyası oluştur:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3019
```

> Backend portunu kendi backend'inizin portuna göre değiştirin (3019, 3013, vb.)

---

## ✅ 2. Login Sayfasını Güncelle

`app/login/[role]/page.tsx` dosyasını backend'e bağlamak için:

### Mevcut Kod (Simülasyon):

```tsx
// Simulated authentication (Backend entegrasyonunda bu kısım değişecek)
try {
  // Backend'e istek atılacak
  // const response = await fetch('/api/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ username, password, role, rememberMe }),
  // });

  // Simülasyon: Demo amaçlı her zaman başarılı kabul ediyoruz
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 saniye bekleme
  // ...
}
```

### Güncel Kod (Backend Bağlantılı):

```tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useToast } from '@/contexts/ToastContext';
import axiosInstance, { setToastContext } from '@/lib/axiosInstance';
import { AUTH_API } from '@/lib/apiEndpoints';

export default function LoginPage() {
  const router = useRouter();
  const params = useParams();
  const role = params.role as string;
  const { showToast } = useToast();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Toast context'i axios'a bağla
  useEffect(() => {
    setToastContext({ showToast });
  }, [showToast]);

  const roleLabels: Record<string, string> = {
    admin: 'Yönetici',
    teacher: 'Öğretmen',
    student: 'Öğrenci',
    parent: 'Veli',
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!username.trim()) {
      showToast('warning', 'Lütfen kullanıcı adınızı girin!');
      return;
    }

    if (!password.trim()) {
      showToast('warning', 'Lütfen şifrenizi girin!');
      return;
    }

    if (password.length < 4) {
      showToast('warning', 'Şifreniz en az 4 karakter olmalıdır!');
      return;
    }

    setIsLoading(true);

    try {
      // ✅ BACKEND'E İSTEK AT
      const response = await axiosInstance.post(AUTH_API.LOGIN, {
        username,
        password,
        role,
        rememberMe,
      });

      // Backend'den dönen yanıt yapısına göre ayarlayın:
      const { access_token, user } = response.data;

      // Token'ları localStorage'a kaydet
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('username', user.username);
      localStorage.setItem('userRole', user.role);

      // Başarılı giriş
      showToast('success', 'Giriş başarılı! Yönlendiriliyorsunuz...', 2000);
      
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);

    } catch (error) {
      // Hata otomatik olarak toast'ta gösterilir (axiosInstance'da)
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <button 
            onClick={() => router.push('/')}
            className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-4 hover:shadow-lg transition-all border-2 border-gray-100"
          >
            <img 
              src="/eoslogomavi.png" 
              alt="EOS Logo" 
              className="w-14 h-14 object-contain"
            />
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            EOS'a Hoş Geldin!
          </h2>
          <p className="text-sm text-gray-500">{roleLabels[role] || 'Kullanıcı'} girişi</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Kullanıcı adı"
                value={username}
                onChange={setUsername}
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={setPassword}
                showPasswordToggle
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#2B7FFF] border-gray-300 rounded focus:ring-1 focus:ring-[#2B7FFF] cursor-pointer"
                />
                <span className="ml-2 text-gray-600 group-hover:text-gray-900">Beni Hatırla</span>
              </label>
              <button type="button" className="text-[#2B7FFF] hover:text-[#1a6eef] font-medium">
                Şifremi Unuttum
              </button>
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              fullWidth 
              className="py-3 mt-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Giriş yapılıyor...</span>
                </div>
              ) : (
                'Giriş Yap'
              )}
            </Button>
          </form>
        </div>

        {/* Back Button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => router.push('/')}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← Geri dön
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## ✅ 3. Diğer Formları Güncelle

Aynı pattern'i diğer formlarda da kullan:

### Örnek: `components/registration/forms/StudentForm.tsx`

```tsx
import { useEffect } from 'react';
import { useToast } from '@/contexts/ToastContext';
import axiosInstance, { setToastContext } from '@/lib/axiosInstance';
import { STUDENT_API } from '@/lib/apiEndpoints';

export default function StudentForm() {
  const { showToast } = useToast();

  // Toast context'i axios'a bağla
  useEffect(() => {
    setToastContext({ showToast });
  }, [showToast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(STUDENT_API.ADD, formData);
      showToast('success', 'Öğrenci başarıyla eklendi!');
      router.push('/registration');
    } catch (error) {
      console.error('Öğrenci eklenemedi:', error);
      // Hata otomatik toast'ta gösterilir
    }
  };

  // ...
}
```

---

## ✅ 4. Backend Response Formatı

Backend'inizin aşağıdaki formatta yanıt vermesini sağlayın:

### Login Response:

```json
{
  "access_token": "eyJhbGciOiJIUzI1...",
  "user": {
    "id": "123",
    "username": "admin",
    "role": "admin",
    "email": "admin@example.com"
  }
}
```

### Hata Response:

```json
{
  "message": "Kullanıcı adı veya şifre hatalı",
  "status": 401
}
```

### Başarılı İşlem Response:

```json
{
  "message": "İşlem başarılı",
  "data": { ... }
}
```

---

## ✅ 5. Test Et

1. Backend'i başlat (örn: `http://localhost:3019`)
2. Frontend'i başlat: `npm run dev`
3. Login sayfasına git: `http://localhost:3000/login/admin`
4. Giriş yap ve network tabında isteği kontrol et

---

## 🔥 Tüm API Endpoint'leri

```tsx
import {
  AUTH_API,           // Login, Register, Logout
  STUDENT_API,        // Öğrenci işlemleri
  TEACHER_API,        // Öğretmen işlemleri
  HOMEWORK_API,       // Ödev işlemleri
  ATTENDANCE_API,     // Devamsızlık
  ANNOUNCEMENT_API,   // Duyurular
  MEAL_API,           // Yemek menüsü
  CHAT_API,           // Mesajlaşma
  EVENT_API,          // Etkinlikler
  STUDENT_GALLERY_API,// Galeri
  PAYMENT_API,        // Ödeme
  GUIDANCE_API,       // Rehberlik
  // ... ve daha fazlası
} from '@/lib/apiEndpoints';
```

Detaylı kullanım için `API_USAGE.md` dosyasına bakın!

---

## 📋 Checklist

- [ ] `.env.local` dosyası oluşturuldu
- [ ] Backend çalışıyor (örn: http://localhost:3019)
- [ ] Login sayfası güncellendi
- [ ] Test edildi ve giriş başarılı
- [ ] Diğer formlar güncellendi
- [ ] Toast mesajları çalışıyor
- [ ] Token'lar localStorage'a kaydediliyor

---

**✨ Artık backend'e bağlısınız!**

