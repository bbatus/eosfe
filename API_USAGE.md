# 🚀 API Kullanım Rehberi

Bu proje için backend API isteklerini nasıl yapacağınızı gösteren detaylı rehber.

---

## 📦 Kurulum

Axios zaten kurulu durumda ✅

---

## 🔧 Yapılandırma

### `.env.local` Dosyası Oluştur

Proje kök dizininde `.env.local` dosyası oluştur:

```env
# LOKAL DEVELOPMENT
NEXT_PUBLIC_API_BASE_URL=http://localhost:3019

# PRODUCTION (Kubernetes/Vercel)
# NEXT_PUBLIC_API_BASE_URL=/api
```

> **Not:** `.env.local` dosyası `.gitignore`'da olmalı (zaten var).

---

## 📁 Dosya Yapısı

```
lib/
├── apiEndpoints.ts    # Tüm API endpoint'leri
└── axiosInstance.ts   # Axios yapılandırması ve interceptor'lar
```

---

## 🎯 Temel Kullanım

### 1️⃣ **Login Örneği** - Gerçek Proje Yapısı

Mevcut login sayfanızı backend'e bağlamak için:

```tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance, { setToastContext } from '@/lib/axiosInstance';
import { AUTH_API } from '@/lib/apiEndpoints';
import { useToast } from '@/contexts/ToastContext';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function LoginPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Toast context'i axios'a bağla
  useEffect(() => {
    setToastContext({ showToast });
  }, [showToast]);

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

    try {
      setIsLoading(true);
      
      // Backend'e istek at
      const response = await axiosInstance.post(AUTH_API.LOGIN, {
        username,
        password,
        role: 'admin', // veya dinamik role parametresi
      });

      // Token'ı kaydet
      const { access_token, user } = response.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('username', user.username);
      localStorage.setItem('userRole', user.role);

      showToast('success', 'Giriş başarılı! Yönlendiriliyorsunuz...', 2000);
      
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);

    } catch (error: any) {
      // Hata otomatik olarak toast'ta gösterilir (axiosInstance'da)
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <Input
        type="text"
        placeholder="Kullanıcı adı"
        value={username}
        onChange={setUsername}
      />
      <Input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={setPassword}
        showPasswordToggle
      />
      <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
        {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
      </Button>
    </form>
  );
}
```

---

### 2️⃣ **Öğrenci Listesi Çekme** - Gerçek Proje Yapısı

Mevcut `StudentList` componentinizi backend'e bağlamak için:

```tsx
'use client';

import { useEffect, useState } from 'react';
import axiosInstance from '@/lib/axiosInstance';
import { STUDENT_API } from '@/lib/apiEndpoints';
import Card from '@/components/ui/Card';
import Spinner from '@/components/ui/Spinner';
import EmptyState from '@/components/ui/EmptyState';

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  studentNumber: string;
  email: string;
  phone: string;
  grade: string;
}

export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(STUDENT_API.GET_ALL);
      setStudents(response.data);
    } catch (error) {
      console.error('Öğrenciler yüklenemedi:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <EmptyState 
        icon="📚" 
        title="Öğrenci Bulunamadı" 
        description="Henüz kayıtlı öğrenci bulunmuyor." 
      />
    );
  }

  return (
    <div className="grid gap-4">
      {students.map((student) => (
        <Card key={student.id} className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-900">
                {student.firstName} {student.lastName}
              </h3>
              <p className="text-sm text-gray-600">{student.studentNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">{student.grade}</p>
              <p className="text-xs text-gray-500">{student.email}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

---

### 3️⃣ **Öğrenci Ekleme** - Gerçek Proje Yapısı

Mevcut `StudentForm` componentinizi backend'e bağlamak için:

```tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axiosInstance, { setToastContext } from '@/lib/axiosInstance';
import { STUDENT_API } from '@/lib/apiEndpoints';
import { useToast } from '@/contexts/ToastContext';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function StudentForm() {
  const router = useRouter();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentNumber: '',
    email: '',
    phone: '',
    birthDate: '',
    address: '',
  });

  // Toast context'i axios'a bağla
  useEffect(() => {
    setToastContext({ showToast });
  }, [showToast]);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(STUDENT_API.ADD, formData);
      
      showToast('success', 'Öğrenci başarıyla eklendi!');
      
      // Geri dön
      setTimeout(() => {
        router.push('/registration');
      }, 1500);
    } catch (error) {
      console.error('Öğrenci eklenemedi:', error);
      // Hata otomatik toast'ta gösterilir
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
            <Input
              type="text"
              placeholder="Ad"
              value={formData.firstName}
              onChange={(value) => handleChange('firstName', value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
            <Input
              type="text"
              placeholder="Soyad"
              value={formData.lastName}
              onChange={(value) => handleChange('lastName', value)}
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" variant="primary" className="flex-1">
            Kaydet
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => router.push('/registration')}
            className="flex-1"
          >
            İptal
          </Button>
        </div>
      </form>
    </Card>
  );
}
```

---

### 4️⃣ **Öğrenci Silme** (DELETE Request)

```tsx
import { useToast } from '@/contexts/ToastContext';
import axiosInstance from '@/lib/axiosInstance';
import { STUDENT_API } from '@/lib/apiEndpoints';

const { showToast } = useToast();

const handleDelete = async (tcNo: string) => {
  try {
    await axiosInstance.delete(`${STUDENT_API.DELETE}/${tcNo}`);
    showToast('success', 'Öğrenci başarıyla silindi');
    // Listeyi yenile
    fetchStudents();
  } catch (error) {
    console.error('Silme hatası:', error);
    // Hata otomatik toast'ta gösterilir
  }
};
```

---

### 5️⃣ **Dinamik Endpoint Kullanımı** (Parametreli)

```tsx
// Chat conversation örneği
import { CHAT_API } from '@/lib/apiEndpoints';

const userId1 = 'user123';
const userId2 = 'user456';

const response = await axiosInstance.get(
  CHAT_API.GET_CONVERSATION(userId1, userId2)
);
```

---

### 6️⃣ **Query Parameters ile İstek**

```tsx
// Tarihe göre yemek listesi
import { MEAL_API } from '@/lib/apiEndpoints';

const date = '2024-11-15';
const response = await axiosInstance.get(
  `${MEAL_API.GET_MEAL_BY_DATE}?date=${date}`
);

// veya
const response = await axiosInstance.get(MEAL_API.GET_MEAL_BY_DATE, {
  params: { date: '2024-11-15' }
});
```

---

### 7️⃣ **File Upload Örneği**

```tsx
import { useToast } from '@/contexts/ToastContext';
import axiosInstance from '@/lib/axiosInstance';
import { FMT_API } from '@/lib/apiEndpoints';

const { showToast } = useToast();

const handleFileUpload = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axiosInstance.post(
      FMT_API.UPLOAD_FMT,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    showToast('success', 'Dosya başarıyla yüklendi!');
  } catch (error) {
    console.error('Upload hatası:', error);
    // Hata otomatik toast'ta gösterilir
  }
};
```

---

## 🎨 Toast Context Entegrasyonu

`app/layout.tsx` içinde zaten `ToastProvider` var. Component'te kullanmak için:

```tsx
'use client';

import { useEffect } from 'react';
import { useToast } from '@/contexts/ToastContext';
import { setToastContext } from '@/lib/axiosInstance';

export default function MyComponent() {
  const { showToast } = useToast();

  // Toast context'i axios'a bağla
  useEffect(() => {
    setToastContext({ showToast });
  }, [showToast]);

  // Artık axios isteklerinde otomatik toast gösterilir
  // ...
}
```

---

## 🔐 Auth Token Yönetimi

### Token Kaydetme (Login)

```tsx
localStorage.setItem('access_token', response.data.access_token);
localStorage.setItem('username', response.data.user.username);
localStorage.setItem('userRole', response.data.user.role);
```

### Token Otomatik Ekleniyor

`axiosInstance` her istekte otomatik olarak `Authorization: Bearer <token>` header'ını ekler.

### Token Süresi Dolduğunda

- Otomatik toast mesajı gösterilir
- LocalStorage temizlenir
- Login sayfasına yönlendirilir

---

## 🌐 Environment Variables

### Development

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3019
```

### Production (Kubernetes/Vercel)

```env
NEXT_PUBLIC_API_BASE_URL=/api
```

> **Önemli:** `NEXT_PUBLIC_` prefix'i Next.js'te client-side environment variables için zorunludur.

---

## 🎭 Hata Yönetimi

Axios interceptor'lar otomatik olarak şunları yapar:

| Durum | Aksiyonlar |
|-------|-----------|
| **401 Unauthorized** | Toast göster → Logout → Login'e yönlendir |
| **403 Forbidden** | "Yetkiniz yok" toast mesajı |
| **404 Not Found** | "Kaynak bulunamadı" toast mesajı |
| **500 Server Error** | "Sunucu hatası" toast mesajı |
| **Network Error** | "İnternet bağlantınızı kontrol edin" |

---

## 📝 TypeScript Tip Desteği

Tüm endpoint'ler TypeScript ile tip güvenli:

```tsx
// ✅ Doğru kullanım
const url = AUTH_API.LOGIN;

// ❌ Hatalı - compile-time hata verir
AUTH_API.WRONG_ENDPOINT; // Property does not exist
```

---

## 🔥 Gelişmiş Örnekler

### Parallel Requests

```tsx
const [students, teachers, grades] = await Promise.all([
  axiosInstance.get(STUDENT_API.GET_ALL),
  axiosInstance.get(TEACHER_API.GET_ALL),
  axiosInstance.get(GRADE_API.GET_ALL),
]);
```

### Request Cancellation

```tsx
import axios from 'axios';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const response = await axiosInstance.get(STUDENT_API.GET_ALL, {
  cancelToken: source.token
});

// İsteği iptal et
source.cancel('İstek kullanıcı tarafından iptal edildi');
```

---

## 🚨 Dikkat Edilmesi Gerekenler

1. ✅ **Her component'te `'use client'` directive'i kullan** (axios client-side'da çalışır)
2. ✅ **Toast context'i `useEffect` ile bağla**
3. ✅ **Error handling'i try-catch ile yap**
4. ✅ **Loading state'leri yönet**
5. ⚠️ **Server Component'lerde axios kullanma** (Server Actions kullan)

---

## 📚 Tüm API Endpoint'leri

API endpoint'lerinin tam listesi için `lib/apiEndpoints.ts` dosyasına bak.

### Kategoriler:

- 🔐 **AUTH_API** - Authentication
- 👨‍🎓 **STUDENT_API** - Öğrenci işlemleri
- 👨‍🏫 **TEACHER_API** - Öğretmen işlemleri
- 📚 **LESSON_API** - Ders işlemleri
- 📝 **HOMEWORK_API** - Ödev işlemleri
- 📊 **ATTENDANCE_API** - Devamsızlık
- 📢 **ANNOUNCEMENT_API** - Duyurular
- 🍽️ **MEAL_API** - Yemek menüsü
- 💬 **CHAT_API** - Mesajlaşma
- 📸 **STUDENT_GALLERY_API** - Galeri
- 🎉 **EVENT_API** - Etkinlikler
- 💰 **PAYMENT_API** - Ödeme
- 🧠 **GUIDANCE_API** - Rehberlik
- ve daha fazlası...

---

## 🤝 Yardım

Sorularınız için:
- `lib/apiEndpoints.ts` - Tüm endpoint'ler
- `lib/axiosInstance.ts` - Axios yapılandırması
- Bu döküman

---

**✨ İyi kodlamalar!**

