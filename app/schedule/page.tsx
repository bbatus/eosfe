'use client';

import { Suspense, useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import ScheduleTable from '@/components/schedule/ScheduleTable';

function ScheduleContent() {
  const [selectedClass, setSelectedClass] = useState('9');
  const [selectedBranch, setSelectedBranch] = useState('A');

  const classes = ['9', '10', '11', '12'];
  const branches = ['A', 'B', 'C', 'D'];

  const handleSave = (schedule: any) => {
    console.log('Saving schedule:', schedule);
    alert('Ders programı kaydedildi!');
  };

  return (
    <PageContainer>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <nav className="text-sm text-gray-600 mb-4">
          <span>Anasayfa</span>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900">Ders Programı</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Haftalık Ders Programı Oluştur
        </h1>

        <div className="grid grid-cols-2 gap-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sınıf Seçin
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900"
            >
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Şube Seçin
            </label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900"
            >
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <ScheduleTable
        classId={selectedClass}
        branchId={selectedBranch}
        onSave={handleSave}
      />
    </PageContainer>
  );
}

export default function SchedulePage() {
  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole="admin" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar username="eosadmin" />

        <main className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-6">Yükleniyor...</div>}>
            <ScheduleContent />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
