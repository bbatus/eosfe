'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import HomeworkCards from '@/components/homework/HomeworkCards';
import HomeworkAddForm from '@/components/homework/HomeworkAddForm';
import HomeworkAssign from '@/components/homework/HomeworkAssign';
import HomeworkCheck from '@/components/homework/HomeworkCheck';
import HomeworkNotify from '@/components/homework/HomeworkNotify';
import HomeworkReports from '@/components/homework/HomeworkReports';
import HomeworkManage from '@/components/homework/HomeworkManage';

function HomeworkContent() {
  const searchParams = useSearchParams();
  const action = searchParams.get('action');

  const renderContent = () => {
    switch (action) {
      case 'add':
        return <HomeworkAddForm />;
      case 'assign':
        return <HomeworkAssign />;
      case 'check':
        return <HomeworkCheck />;
      case 'notify':
        return <HomeworkNotify />;
      case 'reports':
        return <HomeworkReports />;
      case 'manage':
        return <HomeworkManage />;
      default:
        return <HomeworkCards />;
    }
  };

  return <PageContainer>{renderContent()}</PageContainer>;
}

export default function HomeworkPage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <HomeworkContent />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
