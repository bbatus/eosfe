'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import ContentCards from '@/components/content/ContentCards';
import ContentList from '@/components/content/ContentList';
import ContentAddForm from '@/components/content/ContentAddForm';

function ContentContent() {
  const searchParams = useSearchParams();
  const action = searchParams.get('action');
  const type = searchParams.get('type');

  const renderContent = () => {
    if (action === 'list') {
      return <ContentList />;
    }
    if (action === 'add' && type) {
      return <ContentAddForm type={type as 'pdf' | 'image' | 'video'} />;
    }
    return <ContentCards />;
  };

  return <PageContainer>{renderContent()}</PageContainer>;
}

export default function ContentPage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <ContentContent />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
