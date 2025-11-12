'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface LessonCard {
  id: number;
  branch: string;
  lesson: number;
}

export default function AttendanceClassSelection() {
  const router = useRouter();
  const [selectedClass, setSelectedClass] = useState('');

  // Mock data - seçilen sınıfa göre şube ve dersler
  const lessons: LessonCard[] = selectedClass ? [
    { id: 1, branch: 'A', lesson: 1 },
    { id: 2, branch: 'A', lesson: 2 },
    { id: 3, branch: 'A', lesson: 3 },
    { id: 4, branch: 'B', lesson: 1 },
    { id: 5, branch: 'B', lesson: 2 },
    { id: 6, branch: 'B', lesson: 3 },
  ] : [];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Sınıf Seçin</h1>
        <Button
          variant="primary"
          size="md"
          onClick={() => router.push('/attendance?view=absent')}
        >
          Devamsız Öğrenciler
        </Button>
      </div>

      {/* Class Dropdown */}
      <Card className="mb-6" padding="md">
        <label className="block text-sm font-medium text-gray-700 mb-2">Sınıf</label>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-sm"
        >
          <option value="">Sınıf Seçin</option>
          <option value="9">9. Sınıf</option>
          <option value="10">10. Sınıf</option>
          <option value="11">11. Sınıf</option>
          <option value="12">12. Sınıf</option>
        </select>
      </Card>

      {/* Lesson Cards */}
      {selectedClass && (
        <>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {selectedClass}. Sınıf Dersleri
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lessons.map((item) => (
              <Card key={item.id} hover padding="md">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {selectedClass}-{item.branch}
                  </h3>
                  <p className="text-sm text-gray-600">{item.lesson}. Ders</p>
                </div>
                <Button
                  variant="primary"
                  fullWidth
                  size="md"
                  onClick={() => router.push(`/attendance?class=${selectedClass}&branch=${item.branch}&lesson=${item.lesson}`)}
                >
                  Detayları Gör
                </Button>
              </Card>
            ))}
          </div>
        </>
      )}

      {!selectedClass && (
        <div className="text-center py-12">
          <p className="text-gray-500">Lütfen bir sınıf seçin</p>
        </div>
      )}
    </div>
  );
}
