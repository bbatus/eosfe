'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface HomeworkItem {
  id: string;
  title: string;
  class: string;
  branch: string;
  dateRange: string;
  completed: number;
  total: number;
  students: { id: string; name: string; completed: boolean }[];
}

export default function HomeworkCheck() {
  const router = useRouter();
  const [classFilter, setClassFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [completionStatus, setCompletionStatus] = useState<Record<string, Record<string, boolean>>>({});

  // Mock data
  const homeworks: HomeworkItem[] = [
    {
      id: '1',
      title: 'Matematik Ödevi',
      class: '11',
      branch: 'A',
      dateRange: '10.11.2025 - 15.11.2025',
      completed: 12,
      total: 15,
      students: [
        { id: '1', name: 'Ahmet Yılmaz', completed: false },
        { id: '2', name: 'Ayşe Demir', completed: false },
        { id: '3', name: 'Mehmet Kaya', completed: false },
      ],
    },
  ];

  const handleToggle = (homeworkId: string, studentId: string) => {
    setCompletionStatus((prev) => ({
      ...prev,
      [homeworkId]: {
        ...prev[homeworkId],
        [studentId]: !prev[homeworkId]?.[studentId],
      },
    }));
  };

  const handleSave = (homeworkId: string) => {
    alert('Ödev durumu kaydedildi!');
  };

  const filteredHomeworks = homeworks.filter((hw) => {
    const matchesClass = !classFilter || hw.class === classFilter;
    const matchesSearch = !searchTerm || hw.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesClass && matchesSearch;
  });

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
        <h1 className="text-2xl font-bold text-gray-900">Ödev Kontrol</h1>
      </div>

      {/* Filtreler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sınıf Seviyesi
          </label>
          <select
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent"
          >
            <option value="">Tüm Sınıflar</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ödev Adı
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ödev adı ile ara..."
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
      </div>

      {/* Ödev Listesi */}
      {filteredHomeworks.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">Henüz atanmış ödev bulunmamaktadır.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredHomeworks.map((homework) => (
            <div key={homework.id} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Kart Başlığı */}
              <div
                className="bg-white p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedId(expandedId === homework.id ? null : homework.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{homework.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {homework.class}-{homework.branch} • {homework.dateRange}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {homework.completed}/{homework.total} öğrenci tamamladı
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedId === homework.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Genişletilmiş İçerik */}
              {expandedId === homework.id && (
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <table className="w-full">
                    <thead className="bg-white">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                          Ad Soyad
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">
                          Durum
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      {homework.students.map((student) => (
                        <tr key={student.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-900">{student.name}</td>
                          <td className="px-4 py-3 text-center">
                            <button
                              onClick={() => handleToggle(homework.id, student.id)}
                              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                                completionStatus[homework.id]?.[student.id]
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-red-100 text-red-700'
                              }`}
                            >
                              {completionStatus[homework.id]?.[student.id] ? 'Yaptı' : 'Yapmadı'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mt-4">
                    <Button
                      variant="primary"
                      onClick={() => handleSave(homework.id)}
                      className="w-full md:w-auto"
                    >
                      Kaydet
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
