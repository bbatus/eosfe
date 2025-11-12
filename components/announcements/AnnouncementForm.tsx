'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface AnnouncementFormProps {
  announcementId?: string | null;
}

export default function AnnouncementForm({ announcementId }: AnnouncementFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    targetRole: '',
    title: '',
    content: '',
    priority: 'normal',
  });

  const isFormValid = formData.targetRole && formData.title.trim() && formData.content.trim();

  const roleOptions = [
    { value: 'teachers', label: 'Öğretmenler', icon: '👨‍🏫' },
    { value: 'students', label: 'Öğrenciler', icon: '🎓' },
    { value: 'parents', label: 'Veliler', icon: '👨‍👩‍👧' },
    { value: 'all', label: 'Tümü', icon: '📢' },
  ];

  const handlePublish = () => {
    if (isFormValid) {
      alert('Duyuru başarıyla yayınlandı!');
      router.push('/announcements');
    }
  };

  const handleSaveDraft = () => {
    if (formData.title.trim()) {
      alert('Duyuru taslak olarak kaydedildi!');
      router.push('/announcements');
    }
  };

  return (
    <div>
      {/* Kontroller */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="secondary" onClick={() => router.push('/announcements')}>
          ← Geri Dön
        </Button>
        <Button
          variant="primary"
          onClick={handlePublish}
          disabled={!isFormValid}
          className={!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}
        >
          Duyuru Gönder
        </Button>
      </div>

      {/* Başlık */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {announcementId ? 'Duyuru Düzenle' : 'Yeni Duyuru Oluştur'}
        </h1>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sol: Form Alanları */}
        <div className="lg:col-span-2 space-y-6">
          {/* Alıcı Rolü */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rol Seçin <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.targetRole}
              onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Rol seçin</option>
              {roleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.icon} {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Duyuru Başlığı */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duyuru Başlığı <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Duyuru Başlığı..."
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              maxLength={100}
              required
            />
            <p className="text-xs text-gray-500 mt-1">{formData.title.length}/100 karakter</p>
          </div>

          {/* Duyuru İçeriği */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duyuru İçeriği <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Duyuru İçeriği..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={8}
              maxLength={1000}
              required
            />
            <p className="text-xs text-gray-500 mt-1">{formData.content.length}/1000 karakter</p>
          </div>

          {/* Öncelik Seviyesi */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Öncelik Seviyesi</label>
            <div className="flex gap-4">
              {[
                { value: 'normal', label: 'Normal', color: 'blue' },
                { value: 'important', label: 'Önemli', color: 'orange' },
                { value: 'urgent', label: 'Acil', color: 'red' },
              ].map((priority) => (
                <label key={priority.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="priority"
                    value={priority.value}
                    checked={formData.priority === priority.value}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">{priority.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Eylem Butonları */}
          <div className="flex gap-3 pt-4">
            <Button variant="secondary" onClick={() => router.push('/announcements')} className="flex-1">
              İptal Et
            </Button>
            <Button
              variant="secondary"
              onClick={handleSaveDraft}
              className="flex-1 bg-orange-50 text-orange-600 hover:bg-orange-100 border-orange-200"
            >
              Taslak Kaydet
            </Button>
            <Button
              variant="primary"
              onClick={handlePublish}
              disabled={!isFormValid}
              className="flex-1"
            >
              Yayınla
            </Button>
          </div>
        </div>

        {/* Sağ: Önizleme */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Önizleme</h3>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              {formData.title || formData.content ? (
                <>
                  <h4 className="font-semibold text-gray-900 mb-2">{formData.title || 'Başlık'}</h4>
                  <p className="text-sm text-gray-600 whitespace-pre-wrap">
                    {formData.content || 'İçerik buraya gelecek...'}
                  </p>
                  {formData.priority !== 'normal' && (
                    <div className="mt-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          formData.priority === 'important'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {formData.priority === 'important' ? 'Önemli' : 'Acil'}
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-sm text-gray-400 text-center py-8">
                  Duyuru önizlemesi burada görünecek
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
