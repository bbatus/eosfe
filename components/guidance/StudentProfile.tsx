'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface GuidanceNote {
  id: string;
  title: string;
  content: string;
  isVisibleToParent: boolean;
  createdBy: string;
  createdAt: string;
}

interface StudentProfileProps {
  studentId: string;
}

export default function StudentProfile({ studentId }: StudentProfileProps) {
  const router = useRouter();
  const [filterVisibility, setFilterVisibility] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const student = {
    id: studentId,
    firstName: 'Erçin',
    lastName: 'Akkaya',
    classId: '9',
    branchId: 'A',
  };

  const [notes, setNotes] = useState<GuidanceNote[]>([
    {
      id: '1',
      title: 'Ders Başarısı',
      content: 'Öğrenci matematik dersinde çok başarılı. Sınıf içi katılımı yüksek.',
      isVisibleToParent: true,
      createdBy: 'Rehber Öğretmen',
      createdAt: '10.11.2025 14:30',
    },
    {
      id: '2',
      title: 'Sosyal İlişkiler',
      content: 'Arkadaşlarıyla iyi ilişkiler kuruyor. Grup çalışmalarında aktif.',
      isVisibleToParent: false,
      createdBy: 'Rehber Öğretmen',
      createdAt: '05.11.2025 10:15',
    },
  ]);

  const handleDelete = (noteId: string) => {
    if (confirm('Bu notu silmek istediğinizden emin misiniz?')) {
      setNotes(notes.filter((note) => note.id !== noteId));
    }
  };

  const filteredNotes = notes.filter((note) => {
    const matchesVisibility =
      !filterVisibility ||
      (filterVisibility === 'visible' && note.isVisibleToParent) ||
      (filterVisibility === 'hidden' && !note.isVisibleToParent);
    const matchesSearch =
      !searchTerm ||
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesVisibility && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {student.firstName} {student.lastName} - {student.classId}-{student.branchId}
          </h1>
          <p className="text-sm text-gray-600">Rehberlik Notları</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={() => router.push('/guidance')}>
            ← Geri Dön
          </Button>
          <Button
            variant="primary"
            onClick={() => router.push(`/guidance?action=add-note&studentId=${studentId}`)}
          >
            + Yeni Not Ekle
          </Button>
        </div>
      </div>

      {/* Filtreler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <select
          value={filterVisibility}
          onChange={(e) => setFilterVisibility(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Tüm Notlar</option>
          <option value="visible">Veli Görebilir</option>
          <option value="hidden">Veli Göremez</option>
        </select>

        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Not başlığı veya içeriğinde ara..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
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

      {/* Not Listesi */}
      {filteredNotes.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-lg font-medium text-gray-700 mb-2">
            Henüz rehberlik notu bulunmamaktadır.
          </p>
          <Button
            variant="primary"
            onClick={() => router.push(`/guidance?action=add-note&studentId=${studentId}`)}
            className="mt-4"
          >
            İlk Notu Ekle
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{note.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    {note.isVisibleToParent ? (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                        👁️ Veli Görebilir
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                        🚫 Veli Göremez
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs text-gray-500">{note.createdAt}</span>
              </div>

              <p className="text-sm text-gray-600 mb-3 whitespace-pre-wrap">{note.content}</p>

              <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                <span>Yazan: {note.createdBy}</span>
                <div className="flex items-center gap-2">
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
                    onClick={() => handleDelete(note.id)}
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
