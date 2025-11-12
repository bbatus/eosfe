'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';
import PageContainer from '@/components/layout/PageContainer';
import AnnouncementList from '@/components/announcements/AnnouncementList';
import AnnouncementForm from '@/components/announcements/AnnouncementForm';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

function AnnouncementContent() {
  const searchParams = useSearchParams();
  const action = searchParams.get('action');
  const id = searchParams.get('id');

  if (action === 'create' || (action === 'edit' && id)) {
    return <AnnouncementForm announcementId={id} />;
  }

  return <AnnouncementList />;
}

export default function AnnouncementsPage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <PageContainer>
              <AnnouncementContent />
            </PageContainer>
          </Suspense>
        </main>
      </div>
    </div>
  );
}
