'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import RegistrationCards from '@/components/registration/RegistrationCards';
import StudentList from '@/components/registration/StudentList';
import TeacherList from '@/components/registration/TeacherList';
import CourseList from '@/components/registration/CourseList';
import ClassList from '@/components/registration/ClassList';
import BranchList from '@/components/registration/BranchList';
import CourseTopics from '@/components/registration/CourseTopics';
import StudentManualForm from '@/components/registration/forms/StudentManualForm';
import StudentBulkForm from '@/components/registration/forms/StudentBulkForm';
import TeacherForm from '@/components/registration/forms/TeacherForm';
import CourseForm from '@/components/registration/forms/CourseForm';
import ClassForm from '@/components/registration/forms/ClassForm';
import BranchForm from '@/components/registration/forms/BranchForm';
import PageContainer from '@/components/layout/PageContainer';

function RegistrationContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const action = searchParams.get('action');
  const method = searchParams.get('method');
  const view = searchParams.get('view');

  const renderContent = () => {
    // Eğer sadece type varsa (action yoksa), liste sayfasını göster
    if (type && !action && !view) {
      switch (type) {
        case 'student':
          return <StudentList />;
        case 'teacher':
          return <TeacherList />;
        case 'course':
          return <CourseList />;
        case 'class':
          return <ClassList />;
        case 'branch':
          return <BranchList />;
        default:
          return <RegistrationCards />;
      }
    }

    // Course için topics view
    if (type === 'course' && view === 'topics') {
      return <CourseTopics />;
    }

    // Eğer type ve action varsa
    if (type && action) {
      // Student için özel akış
      if (type === 'student') {
        if (action === 'add' && method === 'manual') {
          return <StudentManualForm />;
        }
        if (action === 'add' && method === 'bulk') {
          return <StudentBulkForm />;
        }
        // Edit action için manuel form
        if (action === 'edit') {
          return <StudentManualForm />;
        }
      }

      // Teacher için form
      if (type === 'teacher' && (action === 'add' || action === 'edit')) {
        return <TeacherForm />;
      }

      // Course için form
      if (type === 'course' && (action === 'add' || action === 'edit')) {
        return <CourseForm />;
      }

      // Class için form
      if (type === 'class' && (action === 'add' || action === 'edit')) {
        return <ClassForm />;
      }

      // Branch için form
      if (type === 'branch' && (action === 'add' || action === 'edit')) {
        return <BranchForm />;
      }

      // Varsayılan
      return <RegistrationCards />;
    }

    // Varsayılan olarak kartları göster
    return <RegistrationCards />;
  };

  return (
    <PageContainer>
      {renderContent()}
    </PageContainer>
  );
}

export default function RegistrationPage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <RegistrationContent />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
