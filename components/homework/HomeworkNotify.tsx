'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  class: string;
  branch: string;
  parentPhone: string;
}

export default function HomeworkNotify() {
  const router = useRouter();
  const [selectedHomework, setSelectedHomework] = useState('');
  const [students, setStudents] = useState<Student[]>([
    { id: '1', firstName: 'Ahmet', lastName: 'Yılmaz', class: '11', branch: 'A', parentPhone: '0555 123 4567' },
    { id: '2', firstName: 'Ayşe', lastName: 'Demir', class: '11', branch: 'A', parentPhone: '0555 234 5678' },
  ]);

  const homeworks = [
    { id: '1', title: 'Matematik Ödevi - 10.11.2025 - 15.11.2025' },
    { id: '2', title: 'Fizik Ödevi - 11.11.2025 - 18.11.2025' },
  ];

  const handleRemoveStudent = (studentId: string) => {
    setStudents(students.filter((s) => s.id !== studentId));
  };

  const handleSendNotification = () => {
    if (!selectedHomework) {
      alert('Lütfen bir ödev seçin');
      return;
    }
    if (students.length === 0) {
      alert('Bildirim gönderilecek öğrenci kalmadı');
      return;
    }
    alert(`${students.length} veliye bildirim gönderildi!`);
    router.push('/homework');
  };

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
        <h1 className="text-2xl font-bold text-gray-900">Ödev Bildirimi Gönder</h1>
      </div>

      {/* Ödev Seçimi */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ödev Seçin
        </label>
        <select
          value={selectedHomework}
          onChange={(e) => setSelectedHomework(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent"
        >
          <option value="">Bildirim gönderilecek ödevi seçin</option>
          {homeworks.map((hw) => (
            <option key={hw.id} value={hw.id}>
              {hw.title}
            </option>
          ))}
        </select>
      </div>

      {/* Açıklama */}
      <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800 mb-2">
          Aşağıdaki öğrencilerin velilerine bildirim gönderilecektir:
        </p>
        <p className="text-sm text-blue-700">
          Listeden öğrenci çıkarmak için sil butonunu kullanın.
        </p>
      </div>

      {/* Öğrenci Listesi */}
      {students.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-gray-600 font-medium">Tüm öğrenciler ödevlerini tamamlamış.</p>
        </div>
      ) : (
        <>
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Ad
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Soyad
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Sınıf
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Şube
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                    Veli Telefon
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{student.firstName}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">{student.lastName}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{student.class}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{student.branch}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{student.parentPhone}</td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleRemoveStudent(student.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bildirim Mesajı Önizleme */}
          <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Bildirim Mesajı:</h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">
              {`Sayın Veli,\n[Öğrenci Adı] adlı öğrenciniz [Ödev Adı] ödevini teslim etmemiştir.\nBitiş Tarihi: [Tarih]\nLütfen öğrencinizi uyarınız.`}
            </p>
          </div>

          {/* Bildirim Gönder Butonu */}
          <Button
            variant="primary"
            fullWidth
            onClick={handleSendNotification}
            disabled={!selectedHomework}
            className="bg-green-600 hover:bg-green-700"
          >
            Bildirim Gönder ({students.length} Veli)
          </Button>
        </>
      )}
    </div>
  );
}
