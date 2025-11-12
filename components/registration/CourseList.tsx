'use client';

import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface Course {
  id: number;
  name: string;
  type: string;
}

export default function CourseList() {
  const router = useRouter();

  // Mock data
  const courses: Course[] = [
    { id: 1, name: 'TÜRKÇE', type: 'TYT' },
    { id: 2, name: 'DİN KÜLTÜRÜ VE AHLAK BİLGİSİ', type: 'TYT' },
    { id: 3, name: 'MATEMATİK', type: 'TYT' },
    { id: 4, name: 'KİMYA', type: 'TYT' },
    { id: 5, name: 'COĞRAFYA', type: 'TYT' },
    { id: 6, name: 'BİYOLOJİ', type: 'TYT' },
    { id: 7, name: 'TARİH', type: 'TYT' },
    { id: 8, name: 'FELSEFE', type: 'TYT' },
    { id: 9, name: 'FİZİK', type: 'TYT' },
    { id: 10, name: 'REHBERLİK', type: 'TYT' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dersler</h1>
        <p className="text-sm text-gray-600">Sisteme kayıtlı ders sayısı: {courses.length}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Button
          variant="primary"
          onClick={() => router.push('/registration?type=course&action=add')}
        >
          + Ders Ekle
        </Button>
        <Button variant="secondary">
          📄 PDF İndir
        </Button>
      </div>

      {/* Category Title */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-700">TEMEL YETERLİLİK TESTİ DERSLERİ</h2>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {courses.map((course) => (
          <Card key={course.id} hover className="flex flex-col">
            <div className="flex-1 mb-4">
              <h3 className="text-base font-semibold text-gray-900 text-center">
                {course.name}
              </h3>
            </div>
            <Button
              variant="primary"
              fullWidth
              onClick={() => router.push(`/registration?type=course&courseId=${course.id}&view=topics`)}
              className="text-sm"
            >
              Konuları Gör
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
