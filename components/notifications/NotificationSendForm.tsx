'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function NotificationSendForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    recipientType: '',
    sender: '',
    title: '',
    content: '',
  });
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const recipientCounts = {
    students: 250,
    parents: 180,
    teachers: 20,
    all: 450,
  };

  const recipientOptions = [
    { value: 'students', label: 'Öğrenciler', icon: '🎓' },
    { value: 'parents', label: 'Veliler', icon: '👨‍👩‍👧' },
    { value: 'teachers', label: 'Öğretmenler', icon: '👨‍🏫' },
    { value: 'all', label: 'Tümü', icon: '📢' },
  ];

  const isFormValid =
    formData.recipientType && formData.sender.trim() && formData.title.trim() && formData.content.trim();

  const getRecipientCount = () => {
    if (!formData.recipientType) return 0;
    return recipientCounts[formData.recipientType as keyof typeof recipientCounts] || 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setShowConfirmModal(true);
    }
  };

  const handleConfirmSend = () => {
    alert('Bildirim başarıyla gönderildi!');
    router.push('/notifications');
  };

  return (
    <div>
      {/* Kontroller */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="secondary" onClick={() => router.push('/notifications')}>
          ← Geri Dön
        </Button>
        <Button
          variant="primary"
          onClick={() => isFormValid && setShowConfirmModal(true)}
          disabled={!isFormValid}
          className={!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}
        >
          Gönder
        </Button>
      </div>

      {/* Başlık */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Yeni Bildirim Gönder</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Alıcı Seçimi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Alıcı Seçin <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.recipientType}
            onChange={(e) => setFormData({ ...formData, recipientType: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Alıcı Seçin</option>
            {recipientOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.icon} {option.label}
              </option>
            ))}
          </select>
          {formData.recipientType && (
            <p className="text-sm text-blue-600 mt-2">
              Bu bildirim {getRecipientCount()} kişiye gönderilecek
            </p>
          )}
        </div>

        {/* Gönderen */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kimden <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.sender}
            onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
            placeholder="Kimden..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={100}
            required
          />
          <p className="text-xs text-gray-500 mt-1">{formData.sender.length}/100 karakter</p>
        </div>

        {/* Bildirim Başlığı */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bildirim Başlığı <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Bildirim Başlığı..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            maxLength={100}
            required
          />
          <p className="text-xs text-gray-500 mt-1">{formData.title.length}/100 karakter</p>
        </div>

        {/* Bildirim İçeriği */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bildirim İçeriği <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Bildirim İçeriği..."
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={6}
            maxLength={500}
            required
          />
          <p className="text-xs text-gray-500 mt-1">{formData.content.length}/500 karakter</p>
        </div>

        {/* Önizleme */}
        {formData.title && formData.content && (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Bildirim Önizlemesi:</h3>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 max-w-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  🔔
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">{formData.sender || 'Gönderen'}</p>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{formData.title}</p>
                  <p className="text-xs text-gray-600 line-clamp-2">{formData.content}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Eylem Butonları */}
        <div className="flex gap-3 pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={() => router.push('/notifications')}
            className="flex-1"
          >
            İptal Et
          </Button>
          <Button type="submit" variant="primary" className="flex-1" disabled={!isFormValid}>
            Gönder
          </Button>
        </div>
      </form>

      {/* Onay Modalı */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Bildirimi Göndermek İstediğinize Emin Misiniz?
            </h3>
            <div className="mb-6 space-y-2 text-sm text-gray-600">
              <p>
                <strong>Alıcı:</strong>{' '}
                {recipientOptions.find((o) => o.value === formData.recipientType)?.label}
              </p>
              <p>
                <strong>Kişi Sayısı:</strong> {getRecipientCount()}
              </p>
              <p>
                <strong>Başlık:</strong> {formData.title}
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1"
              >
                İptal
              </Button>
              <Button variant="primary" onClick={handleConfirmSend} className="flex-1">
                Evet, Gönder
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
