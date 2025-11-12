'use client';

import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import UserAnnouncementList from '@/components/announcements/UserAnnouncementList';

export default function ViewAnnouncementsPage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <PageContainer>
            <UserAnnouncementList />
          </PageContainer>
        </main>
      </div>
    </div>
  );
}
