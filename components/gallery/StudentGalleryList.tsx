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
  photoCount: number;
}

export default function StudentGalleryList() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  // Mock data
  const [students] = useState<Student[]>([
    { id: '1', firstName: 'ercin', lastName: 'akkaya', tcNo: '63787247082', classId: '9', branchId: 'A', photoCount: 0 }
  ]);

  const classes = ['9', '10', '11', '12'];
  const branches = ['A', 'B', 'C', 'D'];

  const filteredStudents = students.filter(student => {
    const matchesSearch = searchTerm === '' || 
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.tcNo.includes(searchTerm);
    
    const matchesClass = selectedClass === '' || student.classId === selectedClass;
    const matchesBranch = selectedBranch === '' || student.branchId === selectedBranch;

    return matchesSearch && matchesClass && matchesBranch;
  });

  const handleStudentClick = (studentId: string) => {
    router.push(`/gallery?studentId=${studentId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <nav className="text-sm text-gray-600 mb-4">
          Anasayfa &gt; Öğrenci Galerisi
        </nav>
        <h1 className="text-2xl font-bold text-gray-900">Öğrenci Galerisi</h1>
      </div>

      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Öğrenci adı, soyadı veya TC No ile"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900 placeholder:text-gray-700"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900"
        >
          <option value="">Tüm Sınıflar</option>
          {classes.map(cls => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>

        <select
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
          className="px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-gray-900"
        >
          <option value="">Tüm Şubeler</option>
          {branches.map(branch => (
            <option key={branch} value={branch}>{branch}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStudents.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            Öğrenci bulunamadı.
          </div>
        ) : (
          filteredStudents.map(student => (
            <div
              key={student.id}
              onClick={() => handleStudentClick(student.id)}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {student.firstName} {student.lastName}
              </h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Sınıf: {student.classId}</p>
                <p>Şube: {student.branchId}</p>
                <p>TC No: {student.tcNo}</p>
                <p className="text-[#2B7FFF] font-medium mt-2">
                  {student.photoCount} fotoğraf
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
