'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  tcNo: string;
  classId: string;
  branchId: string;
  noteCount: number;
}

export default function StudentList() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const students: Student[] = [
    {
      id: '1',
      firstName: 'Erçin',
      lastName: 'Akkaya',
      tcNo: '63787247082',
      classId: '9',
      branchId: 'A',
      noteCount: 3,
    },
    {
      id: '2',
      firstName: 'Ayşe',
      lastName: 'Yılmaz',
      tcNo: '12345678901',
      classId: '10',
      branchId: 'B',
      noteCount: 1,
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.tcNo.includes(searchTerm)
  );

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <span>Anasayfa</span>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900">Rehberlik</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Rehberlik Modülü</h1>
        <p className="text-sm text-gray-600">Öğrenci seçerek not girin veya profil görüntüleyin</p>
      </div>

      {/* Arama */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Öğrenci adı veya TC kimlik..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-3"
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
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Ad</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Soyad</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">TC No</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Sınıf</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Şube</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Not Sayısı</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">İşlemler</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900">{student.firstName}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{student.lastName}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{student.tcNo}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{student.classId}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{student.branchId}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {student.noteCount} not
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => router.push(`/guidance?action=add-note&studentId=${student.id}`)}
                      className="px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                    >
                      Not Gir
                    </button>
                    <button
                      onClick={() => router.push(`/guidance?action=profile&studentId=${student.id}`)}
                      className="px-3 py-1.5 border border-blue-600 text-blue-600 text-sm font-medium rounded hover:bg-blue-50 transition-colors"
                    >
                      Profil
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sayfalama */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
          Önceki
        </button>
        <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm font-medium">1</button>
        <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
          Sonraki
        </button>
      </div>
    </div>
  );
}
