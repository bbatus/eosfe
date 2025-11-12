'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import AttendanceClassSelection from '@/components/attendance/AttendanceClassSelection';
import AttendanceDetail from '@/components/attendance/AttendanceDetail';
import AbsentStudents from '@/components/attendance/AbsentStudents';

function AttendanceContent() {
  const searchParams = useSearchParams();
  const view = searchParams.get('view');
  const classNum = searchParams.get('class');
  const branch = searchParams.get('branch');
  const lesson = searchParams.get('lesson');

  const renderContent = () => {
    // Devamsız öğrenciler sayfası
    if (view === 'absent') {
      return <AbsentStudents />;
    }

    // Yoklama detay sayfası
    if (classNum && branch && lesson) {
      return <AttendanceDetail classNum={classNum} branch={branch} lesson={lesson} />;
    }

    // Varsayılan: Sınıf seçim sayfası
    return <AttendanceClassSelection />;
  };

  return (
    <PageContainer>
      {renderContent()}
    </PageContainer>
  );
}

export default function AttendancePage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <TopBar username="eosadmin" />
        
        <main className="flex-1 overflow-y-auto pt-16 lg:pt-0">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <AttendanceContent />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
