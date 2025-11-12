'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function HomeworkAddForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    description: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 50 * 1024 * 1024) {
        alert('Dosya boyutu 50MB\'dan küçük olmalıdır');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi
    console.log('Form Data:', formData);
    console.log('File:', selectedFile);
    alert('Ödev başarıyla kaydedildi!');
    router.push('/homework');
  };

  return (
    <div>
      {/* Geri Dön Butonu */}
      <div className="mb-6">
        <Button variant="secondary" onClick={() => router.push('/homework')}>
          ← Geri Dön
        </Button>
      </div>

      {/* Başlık */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Ödev Ekle</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Veriliş Tarihi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Veriliş Tarihi
          </label>
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent transition-colors"
            required
          />
        </div>

        {/* Bitiş Tarihi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bitiş Tarihi
          </label>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent transition-colors"
            required
            min={formData.startDate}
          />
        </div>

        {/* Ödev İçeriği */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ödev İçeriği (Açıklama)
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Ödev açıklamasını buraya yazın..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent transition-colors resize-none"
            rows={5}
            maxLength={1000}
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.description.length}/1000 karakter
          </p>
        </div>

        {/* Dosya Ekle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dosya Ekle (Opsiyonel)
          </label>
          <div className="flex items-center gap-3">
            <label className="cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.mp4,.avi"
                className="hidden"
              />
              <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors text-sm font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                Dosya Seç
              </span>
            </label>
            {selectedFile && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {selectedFile.name}
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            PDF, DOC, DOCX, MP4, AVI - Maksimum 50MB
          </p>
        </div>

        {/* Kaydet Butonu */}
        <div className="pt-4">
          <Button type="submit" variant="primary" fullWidth>
            Ödevi Kaydet
          </Button>
        </div>
      </form>
    </div>
  );
}
