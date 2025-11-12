'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface Content {
  id: string;
  type: 'pdf' | 'image' | 'video';
  title: string;
  description: string;
  fileName: string;
  classId: string;
  courseId: string;
  uploadedAt: string;
  fileSize: number;
}

export default function ContentList() {
  const router = useRouter();
  // Component for listing content
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [courseFilter, setCourseFilter] = useState('');

  // Mock data
  const [contents, setContents] = useState<Content[]>([
    {
      id: '1',
      type: 'pdf',
      title: 'Matematik Ders Notları',
      description: 'Trigonometri konusu ders notları',
      fileName: 'matematik_trigonometri.pdf',
      classId: '11',
      courseId: 'Matematik',
      uploadedAt: '10.11.2025',
      fileSize: 2500000,
    },
  ]);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const getTypeBadge = (type: string) => {
    const badges = {
      pdf: { text: 'PDF', color: 'bg-red-100 text-red-700' },
      image: { text: 'Resim', color: 'bg-green-100 text-green-700' },
      video: { text: 'Video', color: 'bg-purple-100 text-purple-700' },
    };
    return badges[type as keyof typeof badges] || badges.pdf;
  };

  const handleDelete = (id: string) => {
    if (confirm('Bu içeriği silmek istediğinizden emin misiniz?')) {
      setContents(contents.filter((c) => c.id !== id));
    }
  };

  const handleDownload = (content: Content) => {
    alert(`${content.fileName} indiriliyor...`);
  };

  const filteredContents = contents.filter((content) => {
    const matchesSearch =
      content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.fileName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = !typeFilter || content.type === typeFilter;
    const matchesClass = !classFilter || content.classId === classFilter;
    const matchesCourse = !courseFilter || content.courseId === courseFilter;
    return matchesSearch && matchesType && matchesClass && matchesCourse;
  });

  const stats = {
    total: contents.length,
    pdf: contents.filter((c) => c.type === 'pdf').length,
    image: contents.filter((c) => c.type === 'image').length,
    video: contents.filter((c) => c.type === 'video').length,
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="hover:text-gray-700 cursor-pointer" onClick={() => router.push('/dashboard')}>
          Ana Sayfa
        </span>
        <span className="mx-2">›</span>
        <span className="hover:text-gray-700 cursor-pointer" onClick={() => router.push('/content')}>
          İçerikler
        </span>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Görüntüle</span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">İçerik Kayıt Modülü</h1>
        <h2 className="text-lg font-semibold text-gray-700">İçerikler</h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-600 font-medium">Toplam</p>
          <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <p className="text-sm text-red-600 font-medium">PDF</p>
          <p className="text-2xl font-bold text-red-900">{stats.pdf}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="text-sm text-green-600 font-medium">Resim</p>
          <p className="text-2xl font-bold text-green-900">{stats.image}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <p className="text-sm text-purple-600 font-medium">Video</p>
          <p className="text-2xl font-bold text-purple-900">{stats.video}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="primary"
          onClick={() => router.push('/content')}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
        >
          + İçerik Ekle
        </Button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Tüm Türler</option>
          <option value="pdf">PDF</option>
          <option value="image">Resim</option>
          <option value="video">Video</option>
        </select>

        <select
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Tüm Sınıflar</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        <select
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Tüm Dersler</option>
          <option value="Matematik">Matematik</option>
          <option value="Fizik">Fizik</option>
          <option value="Kimya">Kimya</option>
        </select>

        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="İçeriklerde ara..."
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

      {/* Content List */}
      {filteredContents.length === 0 ? (
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
          <p className="text-gray-500 mb-4">Hiç içerik bulunmamaktadır.</p>
          <Button variant="primary" onClick={() => router.push('/content')}>
            İçerik Ekle
          </Button>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Tür</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Açıklama</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Dosya Adı</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Sınıf</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Ders</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Tarih</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Boyut</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase">İşlemler</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredContents.map((content) => {
                const badge = getTypeBadge(content.type);
                return (
                  <tr key={content.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${badge.color}`}>
                        {badge.text}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{content.description}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{content.fileName}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{content.classId}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{content.courseId}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{content.uploadedAt}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{formatFileSize(content.fileSize)}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleDownload(content)}
                          className="text-green-600 hover:text-green-800 transition-colors"
                          title="İndir"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(content.id)}
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
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
