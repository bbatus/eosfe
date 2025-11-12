'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface Event {
  id: string;
  name: string;
  date: string;
  imageCount: number;
}

export default function EventList() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([
    { id: '1', name: 'a', date: '2025-03-15', imageCount: 0 }
  ]);

  const handleAddEvent = () => {
    router.push('/events?action=add');
  };

  const handleViewEvent = (eventId: string) => {
    router.push(`/events?action=view&id=${eventId}`);
  };

  const handleDeleteEvent = (eventId: string) => {
    if (confirm('Bu etkinliği silmek istediğinize emin misiniz?')) {
      setEvents(events.filter(e => e.id !== eventId));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <nav className="text-sm text-gray-600 mb-4">
          <span>Anasayfa</span>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">Etkinlikler</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Etkinlik Modülü</h1>
        <p className="text-sm text-gray-600">
          Sisteme kayıtlı etkinlik sayısı: {events.length}
        </p>
      </div>

      <div className="mb-6">
        <Button
          onClick={handleAddEvent}
          className="bg-gradient-to-r from-orange-500 to-blue-900 hover:from-orange-600 hover:to-blue-950"
        >
          + Etkinlik Ekle
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Etkinlik Adı
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan={2} className="px-4 py-8 text-center text-gray-500">
                  Henüz etkinlik eklenmemiş.
                </td>
              </tr>
            ) : (
              events.map((event) => (
                <tr key={event.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{event.name}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => handleViewEvent(event.id)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        title="Görüntüle"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(event.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        title="Sil"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
