'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface AbsentStudent {
  id: number;
  firstName: string;
  lastName: string;
  class: string;
  branch: string;
}

export default function AbsentStudents() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');
  
  // Mock data - boş liste
  const absentStudents: AbsentStudent[] = [];

  const handleSendNotification = () => {
    if (absentStudents.length === 0) {
      alert('Bildirim gönderilecek öğrenci yok.');
      return;
    }
    alert('Velilere bildirim gönderildi!');
  };

  const handleDelete = (id: number) => {
    if (confirm('Bu kaydı silmek istediğinizden emin misiniz?')) {
      console.log('Delete student:', id);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Yok Yazılan Öğrenciler</h1>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            size="md"
            onClick={() => router.push('/attendance')}
          >
            Geri Dön
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={handleSendNotification}
            disabled={absentStudents.length === 0}
          >
            Bildirim Gönder
          </Button>
        </div>
      </div>

      {/* Filter */}
      <Card className="mb-6" padding="md">
        <label className="block text-sm font-medium text-gray-700 mb-2">Ders Filtrele</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-sm"
        >
          <option value="all">Tüm Dersler</option>
          <option value="1">1. Ders</option>
          <option value="2">2. Ders</option>
          <option value="3">3. Ders</option>
          <option value="4">4. Ders</option>
        </select>
      </Card>

      {/* Student List or Empty State */}
      <Card padding="md">
        {absentStudents.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500 text-lg">Hiç yok yazılan öğrenci yok.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Ad</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Soyad</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Sınıf</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Şube</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {absentStudents.map((student) => (
                  <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{student.firstName}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{student.lastName}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{student.class}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{student.branch}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        title="Sil"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
