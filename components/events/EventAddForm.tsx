'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function EventAddForm() {
  const router = useRouter();
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSave = () => {
    if (!eventName.trim() || !eventDate) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }

    console.log('Saving event:', { eventName, eventDate });
    // API çağrısı yapılacak
    alert('Etkinlik kaydedildi!');
    router.push('/events');
  };

  const handleCancel = () => {
    router.push('/events');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <button
          onClick={handleCancel}
          className="flex items-center gap-2 text-[#2B7FFF] hover:text-[#1a6eef] font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Etkinlik Listesine Dön
        </button>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Yeni Etkinlik Ekle</h2>

      <div className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Etkinlik Adı
          </label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Etkinlik adını giriniz..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900 placeholder:text-gray-700"
            maxLength={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Etkinlik Tarihi
          </label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            onClick={handleCancel}
            className="bg-gray-500 hover:bg-gray-600"
          >
            İptal
          </Button>
          <Button
            onClick={handleSave}
            className="bg-[#2B7FFF] hover:bg-[#1a6eef]"
          >
            Kaydet
          </Button>
        </div>
      </div>
    </div>
  );
}
