'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import StudentGalleryList from '@/components/gallery/StudentGalleryList';
import StudentGalleryManager from '@/components/gallery/StudentGalleryManager';

function GalleryContent() {
  const searchParams = useSearchParams();
  const studentId = searchParams.get('studentId');

  // Mock student data
  const getStudentById = (id: string) => {
    const students = [
      { id: '1', firstName: 'ercin', lastName: 'akkaya', tcNo: '63787247082', classId: '9', branchId: 'A' }
    ];
    return students.find(s => s.id === id);
  };

  if (studentId) {
    const student = getStudentById(studentId);
    if (!student) {
      return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p className="text-red-600">Öğrenci bulunamadı.</p>
        </div>
      );
    }

    return (
      <StudentGalleryManager
        studentId={student.id}
        studentName={`${student.firstName} ${student.lastName}`}
      />
    );
  }

  return <StudentGalleryList />;
}

export default function GalleryPage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <PageContainer>
              <GalleryContent />
            </PageContainer>
          </Suspense>
        </main>
      </div>
    </div>
  );
}
