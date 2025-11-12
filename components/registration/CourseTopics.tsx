'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface Topic {
  id: number;
  title: string;
}

export default function CourseTopics() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get('courseId');
  
  const [topics, setTopics] = useState<Topic[]>([
    { id: 1, title: 'test' },
  ]);
  const [newTopic, setNewTopic] = useState('');

  // Mock course name - gerçekte API'den gelecek
  const courseName = 'TÜRKÇE';

  const handleAddTopic = () => {
    if (newTopic.trim()) {
      setTopics([...topics, { id: topics.length + 1, title: newTopic }]);
      setNewTopic('');
    }
  };

  const handleDeleteTopic = (id: number) => {
    if (confirm('Bu konuyu silmek istediğinizden emin misiniz?')) {
      setTopics(topics.filter(topic => topic.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Konu Başlıkları</h1>
        <p className="text-sm text-gray-600">DERS: {courseName}</p>
      </div>

      {/* Add Topic Section */}
      <Card className="mb-6">
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Konu giriniz..."
              value={newTopic}
              onChange={setNewTopic}
            />
          </div>
          <Button
            variant="primary"
            onClick={handleAddTopic}
            className="px-6"
          >
            + Ekle
          </Button>
        </div>
      </Card>

      {/* Topics Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 w-20">NO</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">KONU BAŞLIĞI</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 w-32">DÜZENLE/SİL</th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic, index) => (
                <tr key={topic.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">{index + 1}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{topic.title}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          const newTitle = prompt('Yeni konu başlığı:', topic.title);
                          if (newTitle && newTitle.trim()) {
                            setTopics(topics.map(t => 
                              t.id === topic.id ? { ...t, title: newTitle } : t
                            ));
                          }
                        }}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        title="Düzenle"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteTopic(topic.id)}
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

      {/* Back Button */}
      <div className="mt-6 flex justify-center">
        <Button
          variant="primary"
          onClick={() => router.push('/registration?type=course')}
          className="px-8"
        >
          Geri Dön
        </Button>
      </div>
    </div>
  );
}
