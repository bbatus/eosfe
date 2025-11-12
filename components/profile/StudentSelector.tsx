'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface StudentSelectorProps {
  classId: string;
  branchId: string;
}

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  tcNo: string;
  studentNo: string;
}

export default function StudentSelector({ classId, branchId }: StudentSelectorProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const students: Student[] = [
    {
      id: '1',
      firstName: 'Erçin',
      lastName: 'Akkaya',
      tcNo: '63787247082',
      studentNo: '2024001',
    },
    {
      id: '2',
      firstName: 'Ayşe',
      lastName: 'Yılmaz',
      tcNo: '12345678901',
      studentNo: '2024002',
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.tcNo.includes(searchTerm) ||
      student.studentNo.includes(searchTerm)
  );

  return (
    <div>
      {/* Kontroller */}
      <div className="mb-6">
        <Button variant="secondary" onClick={() => router.push('/profile')}>
          ← Geri Dön
        </Button>
      </div>

      {/* Başlık */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {classId}-{branchId} Sınıfı - Öğrenci Seçimi
        </h1>
        <p className="text-sm text-gray-600">Profili görüntülemek istediğiniz öğrenciyi seçin</p>
      </div>

      {/* Arama */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Öğrenci adı veya TC kimlik..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Öğrenci Listesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStudents.map((student) => (
          <button
            key={student.id}
            onClick={() => router.push(`/profile?studentId=${student.id}`)}
            className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all text-left"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {student.firstName[0]}
                {student.lastName[0]}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg">
                  {student.firstName} {student.lastName}
                </h3>
                <p className="text-sm text-gray-500">
                  {classId}-{branchId}
                </p>
              </div>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <p>TC No: {student.tcNo}</p>
              <p>Öğrenci No: {student.studentNo}</p>
            </div>
            <div className="mt-4">
              <span className="text-sm text-blue-600 font-medium">Profili Görüntüle →</span>
            </div>
          </button>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">Öğrenci bulunamadı.</p>
        </div>
      )}
    </div>
  );
}
