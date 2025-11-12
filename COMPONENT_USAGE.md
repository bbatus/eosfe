# 🎨 UI Component Kullanım Kılavuzu

Bu dosya, yeni eklenen UI componentlerinin nasıl kullanılacağını gösterir.

## 📦 Yükleme Durumları (Loading States)

### 1. Spinner

```tsx
import Spinner, { CenteredSpinner, InlineSpinner } from '@/components/ui/Spinner';

// Temel kullanım
<Spinner size="md" color="blue" />

// Sayfa ortasında
<CenteredSpinner size="lg" />

// Buton içinde
<button>
  <InlineSpinner size="sm" color="white" />
  Yükleniyor...
</button>
```

### 2. Skeleton Loader

```tsx
import Skeleton, { CardSkeleton, TableRowSkeleton, ListSkeleton } from '@/components/ui/Skeleton';

// Temel kullanım
<Skeleton width="200px" height="20px" />

// Kart skeleton
<CardSkeleton />

// Tablo için
<table>
  <tbody>
    <TableRowSkeleton columns={5} />
    <TableRowSkeleton columns={5} />
  </tbody>
</table>

// Liste için
<ListSkeleton items={5} />
```

### 3. Progress Bar

```tsx
import ProgressBar, { CircularProgress } from '@/components/ui/ProgressBar';

// Linear progress
<ProgressBar progress={75} size="md" color="blue" showLabel />

// Circular progress
<CircularProgress progress={60} size={80} color="green" />
```

## 🔔 Bildirimler (Toast Notifications)

```tsx
'use client';
import { useToast } from '@/contexts/ToastContext';

function MyComponent() {
  const { showToast } = useToast();

  const handleSuccess = () => {
    showToast('success', 'İşlem başarıyla tamamlandı!');
  };

  const handleError = () => {
    showToast('error', 'Bir hata oluştu!', 5000); // 5 saniye
  };

  const handleWarning = () => {
    showToast('warning', 'Dikkat! Bu işlem geri alınamaz.');
  };

  const handleInfo = () => {
    showToast('info', 'Yeni güncelleme mevcut.');
  };

  return (
    <div>
      <button onClick={handleSuccess}>Başarı</button>
      <button onClick={handleError}>Hata</button>
      <button onClick={handleWarning}>Uyarı</button>
      <button onClick={handleInfo}>Bilgi</button>
    </div>
  );
}
```

## ✅ Onay Modalı (Confirmation Modal)

```tsx
'use client';
import { useState } from 'react';
import ConfirmModal from '@/components/ui/ConfirmModal';

function MyComponent() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    // API çağrısı simülasyonu
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowModal(false);
    // Başarı toast'ı göster
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Sil</button>

      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        title="Silme Onayı"
        message="Bu öğrenciyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz."
        confirmText="Evet, Sil"
        cancelText="İptal"
        type="danger"
        isLoading={isLoading}
      />
    </>
  );
}
```

## 📭 Boş Durum (Empty State)

```tsx
import EmptyState, { NoDataFound, NoSearchResults, NoNotifications } from '@/components/ui/EmptyState';

// Özel empty state
<EmptyState
  title="Öğrenci Bulunamadı"
  description="Henüz hiçbir öğrenci kaydı bulunmamaktadır."
  action={{
    label: "Öğrenci Ekle",
    onClick: () => router.push('/registration?type=student&action=add')
  }}
/>

// Hazır şablonlar
<NoDataFound />
<NoSearchResults />
<NoNotifications />
```

## 🎴 Gelişmiş Kart (Enhanced Card)

```tsx
import Card from '@/components/ui/Card';

// Hover efektli kart
<Card hover padding="md">
  <h3>Başlık</h3>
  <p>İçerik</p>
</Card>

// Hover efekti: Yukarı hareket + gölge artışı + smooth transition
```

## 📊 Gerçek Dünya Örnekleri

### Örnek 1: Öğrenci Listesi (Loading State)

```tsx
'use client';
import { useState, useEffect } from 'react';
import { ListSkeleton } from '@/components/ui/Skeleton';
import { NoDataFound } from '@/components/ui/EmptyState';

function StudentList() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // API çağrısı simülasyonu
    setTimeout(() => {
      setStudents([/* data */]);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <ListSkeleton items={5} />;
  if (students.length === 0) return <NoDataFound />;

  return (
    <div>
      {students.map(student => (
        <div key={student.id}>{student.name}</div>
      ))}
    </div>
  );
}
```

### Örnek 2: Form Gönderimi (Toast + Loading)

```tsx
'use client';
import { useState } from 'react';
import { useToast } from '@/contexts/ToastContext';
import { InlineSpinner } from '@/components/ui/Spinner';

function StudentForm() {
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // API çağrısı
      await saveStudent(formData);
      showToast('success', 'Öğrenci başarıyla kaydedildi!');
      router.push('/registration?type=student');
    } catch (error) {
      showToast('error', 'Kayıt sırasında bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form alanları */}
      <button type="submit" disabled={loading}>
        {loading ? (
          <>
            <InlineSpinner size="sm" color="white" />
            Kaydediliyor...
          </>
        ) : (
          'Kaydet'
        )}
      </button>
    </form>
  );
}
```

### Örnek 3: Dosya Yükleme (Progress Bar)

```tsx
'use client';
import { useState } from 'react';
import ProgressBar from '@/components/ui/ProgressBar';

function FileUpload() {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file) => {
    setUploading(true);
    setProgress(0);

    // Simüle edilmiş yükleme
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleUpload(e.target.files[0])} />
      {uploading && (
        <ProgressBar
          progress={progress}
          size="md"
          color="blue"
          showLabel
          className="mt-4"
        />
      )}
    </div>
  );
}
```

## 🎯 Performans Notları

- **Bundle Size**: Toplam ~10-15KB ekleme
- **CSS-only animasyonlar**: GPU-accelerated, çok hızlı
- **Tree-shaking**: Kullanılmayan componentler bundle'a dahil edilmez
- **Lazy loading**: Gerektiğinde yüklenir
- **Zero dependencies**: Harici kütüphane yok

## 🚀 Sonraki Adımlar

Backend entegrasyonu yapıldığında:
1. API çağrılarında loading state'leri kullan
2. Başarı/hata durumlarında toast göster
3. Silme işlemlerinde confirmation modal kullan
4. Boş listelerde empty state göster
5. Dosya yüklemelerinde progress bar kullan
