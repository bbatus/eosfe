'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import NotificationList from '@/components/notifications/NotificationList';
import NotificationSendForm from '@/components/notifications/NotificationSendForm';

function NotificationContent() {
  const searchParams = useSearchParams();
  const action = searchParams.get('action');

  if (action === 'send') {
    return <NotificationSendForm />;
  }

  return <NotificationList />;
}

export default function NotificationsPage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <PageContainer>
              <NotificationContent />
            </PageContainer>
          </Suspense>
        </main>
      </div>
    </div>
  );
}
