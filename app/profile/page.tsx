'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import ClassBranchSelector from '@/components/profile/ClassBranchSelector';
import StudentSelector from '@/components/profile/StudentSelector';
import StudentProfileLayout from '@/components/profile/StudentProfileLayout';

function ProfileContent() {
  const searchParams = useSearchParams();
  const classId = searchParams.get('class');
  const branchId = searchParams.get('branch');
  const studentId = searchParams.get('studentId');

  // Öğrenci profili
  if (studentId) {
    return <StudentProfileLayout studentId={studentId} />;
  }

  // Öğrenci seçimi
  if (classId && branchId) {
    return <StudentSelector classId={classId} branchId={branchId} />;
  }

  // Sınıf/Şube seçimi
  return <ClassBranchSelector />;
}

export default function ProfilePage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <PageContainer>
              <ProfileContent />
            </PageContainer>
          </Suspense>
        </main>
      </div>
    </div>
  );
}
