'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  branch: string;
}

export default function TeacherList() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Mock data
  const teachers: Teacher[] = [
    {
      id: 1,
      firstName: 'Ali Erçin',
      lastName: 'Akkaya',
      branch: 'TARİH',
    },
    {
      id: 2,
      firstName: 'Anıl',
      lastName: 'Tekin',
      branch: 'TÜRKÇE',
    },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="hover:text-gray-700 cursor-pointer">Ana Sayfa</span>
        <span className="mx-2">›</span>
        <span className="hover:text-gray-700 cursor-pointer" onClick={() => router.push('/registration')}>
          Kayıt Modülü
        </span>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Öğretmen</span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Kayıt Modülü</h1>
        <p className="text-sm text-gray-600">Öğretmenler</p>
      </div>

      {/* Stats */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
          <span>Toplam:</span>
          <span className="font-bold">{teachers.length}</span>
          <span>öğretmen</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Button
          variant="primary"
          onClick={() => router.push('/registration?type=teacher&action=add')}
          className="bg-gradient-to-r from-[#2B7FFF] to-red-500"
        >
          + Öğretmen Ekle
        </Button>
        <Button
          variant="secondary"
          className="bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-orange-500 hover:to-red-600"
        >
          📄 PDF İndir
        </Button>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-sm"
            >
              <option value="all">Tüm Bölümler</option>
              <option value="tarih">Tarih</option>
              <option value="turkce">Türkçe</option>
              <option value="matematik">Matematik</option>
              <option value="fen">Fen Bilgisi</option>
            </select>
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Öğretmen adı veya TC kimlik numarasına göre ara"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-sm placeholder-gray-400"
            />
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Ad</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Soyad</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Branş</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">{teacher.firstName}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{teacher.lastName}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{teacher.branch}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => router.push(`/registration?type=teacher&action=edit&id=${teacher.id}`)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        title="Düzenle"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Bu öğretmeni silmek istediğinizden emin misiniz?')) {
                            console.log('Delete teacher:', teacher.id);
                          }
                        }}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        title="Sil"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-gray-200">
          <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
            Önceki
          </button>
          <button className="px-4 py-2 text-sm bg-[#2B7FFF] text-white rounded-md">
            1
          </button>
          <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
            Sonraki
          </button>
        </div>
      </Card>
    </div>
  );
}
