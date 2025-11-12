'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import EventList from '@/components/events/EventList';
import EventAddForm from '@/components/events/EventAddForm';
import EventImageManager from '@/components/events/EventImageManager';

function EventsContent() {
  const searchParams = useSearchParams();
  const action = searchParams.get('action');
  const eventId = searchParams.get('id');

  // Mock event data - gerçek uygulamada API'den gelecek
  const getEventById = (id: string) => {
    const events = [
      { id: '1', name: 'a', date: '2025-03-15' }
    ];
    return events.find(e => e.id === id);
  };

  if (action === 'add') {
    return <EventAddForm />;
  }

  if (action === 'view' && eventId) {
    const event = getEventById(eventId);
    if (!event) {
      return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-red-600">Etkinlik bulunamadı.</p>
        </div>
      );
    }

    return <EventImageManager eventId={event.id} eventName={event.name} />;
  }

  return <EventList />;
}

export default function EventsPage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <PageContainer>
              <EventsContent />
            </PageContainer>
          </Suspense>
        </main>
      </div>
    </div>
  );
}
