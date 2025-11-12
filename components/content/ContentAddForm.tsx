'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface ContentAddFormProps {
  type: 'pdf' | 'image' | 'video';
}

export default function ContentAddForm({ type }: ContentAddFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    description: '',
    classId: '',
    courseId: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const config = {
    pdf: {
      title: 'PDF Ekle',
      accept: '.pdf',
      icon: '📄',
    },
    image: {
      title: 'Resim Ekle',
      accept: '.jpg,.jpeg,.png,.gif',
      icon: '🖼️',
    },
    video: {
      title: 'Video Ekle',
      accept: '.mp4,.avi,.mov,.mkv',
      icon: '🎥',
    },
  };

  const currentConfig = config[type];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Lütfen bir dosya seçin');
      return;
    }

    // Simüle edilmiş yükleme
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        alert('İçerik başarıyla kaydedildi!');
        router.push('/content?action=list');
      }
    }, 200);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  return (
    <div>
      {/* Geri Dön Butonu */}
      <div className="mb-6">
        <Button variant="secondary" onClick={() => router.push('/content')}>
          ← Geri Dön
        </Button>
      </div>

      {/* Başlık */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span>{currentConfig.icon}</span>
          {currentConfig.title}
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Açıklama */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {type === 'pdf' ? 'PDF' : type === 'image' ? 'Resim' : 'Video'} Açıklaması
          </label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder={`${type === 'pdf' ? 'PDF' : type === 'image' ? 'Resim' : 'Video'} açıklaması giriniz...`}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={200}
            required
          />
          <p className="text-xs text-gray-500 mt-1">{formData.description.length}/200 karakter</p>
        </div>

        {/* Sınıf ve Ders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sınıf</label>
            <select
              value={formData.classId}
              onChange={(e) => setFormData({ ...formData, classId: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Sınıf Seçin</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Ders</label>
            <select
              value={formData.courseId}
              onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Ders Seçin</option>
              <option value="Matematik">Matematik</option>
              <option value="Fizik">Fizik</option>
              <option value="Kimya">Kimya</option>
              <option value="Biyoloji">Biyoloji</option>
              <option value="Türkçe">Türkçe</option>
            </select>
          </div>
        </div>

        {/* Dosya Yükleme */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {type === 'pdf' ? 'PDF' : type === 'image' ? 'Resim' : 'Video'} Dosyası
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
            <input
              type="file"
              onChange={handleFileChange}
              accept={currentConfig.accept}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="text-6xl mb-4">{currentConfig.icon}</div>
              {selectedFile ? (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">{selectedFile.name}</p>
                  <p className="text-xs text-gray-500">{formatFileSize(selectedFile.size)}</p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedFile(null);
                    }}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Dosyayı Kaldır
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Dosyayı sürükleyip bırakın veya tıklayın
                  </p>
                  <p className="text-xs text-gray-500">
                    {currentConfig.accept}
                  </p>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Yükleme İlerleme Çubuğu */}
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Yükleniyor...</span>
              <span className="text-sm font-medium text-blue-600">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Eylem Butonları */}
        <div className="flex gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={() => router.push('/content')}
            className="flex-1"
          >
            İptal Et
          </Button>
          <Button type="submit" variant="primary" className="flex-1" disabled={uploadProgress > 0}>
            Kaydet
          </Button>
        </div>
      </form>
    </div>
  );
}
