'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface AttendanceDetailProps {
  classNum: string;
  branch: string;
  lesson: string;
}

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  isPresent: boolean;
}

export default function AttendanceDetail({ classNum, branch, lesson }: AttendanceDetailProps) {
  const router = useRouter();
  const [students, setStudents] = useState<Student[]>([
    { id: 1, firstName: 'Ahmet', lastName: 'Yılmaz', isPresent: true },
    { id: 2, firstName: 'Ayşe', lastName: 'Demir', isPresent: true },
    { id: 3, firstName: 'Mehmet', lastName: 'Kaya', isPresent: true },
    { id: 4, firstName: 'Fatma', lastName: 'Şahin', isPresent: true },
    { id: 5, firstName: 'Ali', lastName: 'Çelik', isPresent: true },
  ]);

  const [selectAll, setSelectAll] = useState(true);

  const handleToggleStudent = (id: number) => {
    setStudents(students.map(s => 
      s.id === id ? { ...s, isPresent: !s.isPresent } : s
    ));
  };

  const handleSelectAll = () => {
    const newState = !selectAll;
    setSelectAll(newState);
    setStudents(students.map(s => ({ ...s, isPresent: newState })));
  };

  const handleSave = () => {
    console.log('Yoklama kaydedildi:', students);
    alert('Yoklama başarıyla kaydedildi!');
    router.push('/attendance');
  };

  const currentDate = new Date().toLocaleDateString('tr-TR');
  const currentTime = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Yoklama Detay</h1>
          <p className="text-sm text-gray-600">
            {classNum}-{branch} - {lesson}. Ders
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {currentDate} - {currentTime}
          </p>
        </div>
        <Button
          variant="outline"
          size="md"
          onClick={() => router.push('/attendance')}
        >
          Geri Dön
        </Button>
      </div>

      {/* Controls */}
      <div className="flex gap-3 mb-6">
        <Button
          variant="secondary"
          size="md"
          onClick={handleSelectAll}
        >
          {selectAll ? 'Tümünü Yok İşaretle' : 'Tümünü Var İşaretle'}
        </Button>
      </div>

      {/* Student List */}
      <Card padding="sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Ad Soyad</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Yoklama Durumu</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {student.firstName} {student.lastName}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleToggleStudent(student.id)}
                        className={`
                          relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                          ${student.isPresent ? 'bg-green-500' : 'bg-red-500'}
                        `}
                      >
                        <span
                          className={`
                            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                            ${student.isPresent ? 'translate-x-6' : 'translate-x-1'}
                          `}
                        />
                      </button>
                      <span className={`ml-3 text-sm font-medium ${student.isPresent ? 'text-green-600' : 'text-red-600'}`}>
                        {student.isPresent ? 'Var' : 'Yok'}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Save Button */}
      <div className="mt-6 flex justify-center">
        <Button
          variant="primary"
          size="lg"
          onClick={handleSave}
          className="px-12"
        >
          Yoklamayı Kaydet
        </Button>
      </div>
    </div>
  );
}
