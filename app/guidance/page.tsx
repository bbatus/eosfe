'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import StudentList from '@/components/guidance/StudentList';
import AddNoteForm from '@/components/guidance/AddNoteForm';
import StudentProfile from '@/components/guidance/StudentProfile';

function GuidanceContent() {
  const searchParams = useSearchParams();
  const action = searchParams.get('action');
  const studentId = searchParams.get('studentId');

  if (action === 'add-note' && studentId) {
    return <AddNoteForm studentId={studentId} />;
  }

  if (action === 'profile' && studentId) {
    return <StudentProfile studentId={studentId} />;
  }

  return <StudentList />;
}

export default function GuidancePage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <PageContainer>
              <GuidanceContent />
            </PageContainer>
          </Suspense>
        </main>
      </div>
    </div>
  );
}
