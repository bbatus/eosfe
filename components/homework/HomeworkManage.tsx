'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface Homework {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  assignedTo: string;
}

export default function HomeworkManage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [homeworks, setHomeworks] = useState<Homework[]>([
    {
      id: '1',
      title: 'Matematik Ödevi',
      startDate: '10.11.2025',
      endDate: '15.11.2025',
      assignedTo: '11-A',
    },
    {
      id: '2',
      title: 'Fizik Ödevi',
      startDate: '11.11.2025',
      endDate: '18.11.2025',
      assignedTo: '12-B',
    },
  ]);

  const handleDelete = (id: string) => {
    if (confirm('Bu ödevi silmek istediğinizden emin misiniz?')) {
      setHomeworks(homeworks.filter((hw) => hw.id !== id));
    }
  };

  const handleDeleteAll = () => {
    if (confirm('Tüm ödevler silinecek. Emin misiniz?')) {
      setHomeworks([]);
      alert('Tüm ödevler silindi!');
    }
  };

  const filteredHomeworks = homeworks.filter((hw) =>
    hw.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Geri Dön Butonu */}
      <div className="mb-6">
        <Button variant="secondary" onClick={() => router.push('/homework')}>
          ← Geri Dön
        </Button>
      </div>

      {/* Başlık */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Ödev Yönetimi</h1>
      </div>

      {/* Arama */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ödev ara..."
            className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent"
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

      {/* Ödev Listesi */}
      {filteredHomeworks.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-gray-500">Henüz eklenmiş ödev bulunmamaktadır.</p>
        </div>
      ) : (
        <>
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Ödev Adı
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Veriliş Tarihi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Bitiş Tarihi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Atanan Sınıf/Şube
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredHomeworks.map((homework) => (
                  <tr key={homework.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{homework.title}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{homework.startDate}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{homework.endDate}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{homework.assignedTo}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => alert('Düzenleme özelliği yakında eklenecek')}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          title="Düzenle"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(homework.id)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                          title="Sil"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tüm Ödevleri Sil Butonu */}
          <Button
            variant="secondary"
            onClick={handleDeleteAll}
            className="bg-red-50 text-red-600 hover:bg-red-100 border-red-200"
          >
            Tüm Ödevleri Sil
          </Button>
        </>
      )}
    </div>
  );
}
