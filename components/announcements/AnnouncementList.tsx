'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface Announcement {
  id: string;
  title: string;
  content: string;
  targetRole: 'teachers' | 'students' | 'parents' | 'all';
  priority: 'normal' | 'important' | 'urgent';
  status: 'active' | 'inactive';
  createdAt: string;
  viewCount: number;
}

export default function AnnouncementList() {
  const router = useRouter();
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: '1',
      title: 'Yarıyıl Tatili Duyurusu',
      content: 'Değerli öğrenciler ve veliler, yarıyıl tatili 15-22 Ocak tarihleri arasında olacaktır. İyi tatiller dileriz.',
      targetRole: 'all',
      priority: 'important',
      status: 'active',
      createdAt: '10.11.2025 14:30',
      viewCount: 245,
    },
  ]);

  const getRoleBadge = (role: string) => {
    const badges = {
      teachers: { text: 'Öğretmenler', color: 'bg-green-100 text-green-700', icon: '👨‍🏫' },
      students: { text: 'Öğrenciler', color: 'bg-blue-100 text-blue-700', icon: '🎓' },
      parents: { text: 'Veliler', color: 'bg-purple-100 text-purple-700', icon: '👨‍👩‍👧' },
      all: { text: 'Tümü', color: 'bg-orange-100 text-orange-700', icon: '📢' },
    };
    return badges[role as keyof typeof badges] || badges.all;
  };

  const getPriorityBadge = (priority: string) => {
    const badges = {
      normal: { text: 'Normal', color: 'bg-blue-100 text-blue-700' },
      important: { text: 'Önemli', color: 'bg-orange-100 text-orange-700' },
      urgent: { text: 'Acil', color: 'bg-red-100 text-red-700' },
    };
    return badges[priority as keyof typeof badges] || badges.normal;
  };

  const handleDelete = (id: string) => {
    if (confirm('Bu duyuruyu silmek istediğinizden emin misiniz?')) {
      setAnnouncements(announcements.filter((a) => a.id !== id));
    }
  };

  const toggleStatus = (id: string) => {
    setAnnouncements(
      announcements.map((a) =>
        a.id === id ? { ...a, status: a.status === 'active' ? 'inactive' : 'active' } : a
      )
    );
  };

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <span>Anasayfa</span>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900">Duyurular</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Duyurular</h1>
        <p className="text-sm text-gray-600">Web paneli duyurularını yönetin</p>
      </div>

      {/* Duyuru Gönder Butonu */}
      <div className="mb-8 flex justify-center">
        <Button
          variant="primary"
          onClick={() => router.push('/announcements?action=create')}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 text-lg"
        >
          <span className="text-2xl mr-2">📢</span>
          Duyuru Gönder
        </Button>
      </div>

      {/* Duyuru Listesi */}
      {announcements.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="text-6xl mb-4">📢</div>
          <p className="text-lg font-medium text-gray-700 mb-2">Eklenmiş bir duyuru yok.</p>
          <p className="text-sm text-gray-500">Yeni duyuru eklemek için yukarıdaki butona tıklayın.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {announcements.map((announcement) => {
            const roleBadge = getRoleBadge(announcement.targetRole);
            const priorityBadge = getPriorityBadge(announcement.priority);

            return (
              <div
                key={announcement.id}
                className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{announcement.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${roleBadge.color}`}>
                        {roleBadge.icon} {roleBadge.text}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${priorityBadge.color}`}>
                        {priorityBadge.text}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          announcement.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {announcement.status === 'active' ? 'Aktif' : 'Pasif'}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{announcement.createdAt}</span>
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{announcement.content}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{announcement.viewCount} görüntülenme</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleStatus(announcement.id)}
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {announcement.status === 'active' ? 'Pasif Yap' : 'Aktif Yap'}
                    </button>
                    <button
                      onClick={() => router.push(`/announcements?action=edit&id=${announcement.id}`)}
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(announcement.id)}
                      className="text-sm text-red-600 hover:text-red-800 transition-colors"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Sayfalama */}
      {announcements.length > 0 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
            Önceki
          </button>
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm font-medium">1</button>
          <button className="px-3 py-1.5 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
            Sonraki
          </button>
        </div>
      )}
    </div>
  );
}
