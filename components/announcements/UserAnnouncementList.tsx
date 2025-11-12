'use client';

import { useState } from 'react';

interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'normal' | 'important' | 'urgent';
  createdAt: string;
  createdBy: string;
  isRead: boolean;
}

export default function UserAnnouncementList() {
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: '1',
      title: 'Yarıyıl Tatili Duyurusu',
      content:
        'Değerli öğrenciler ve veliler, yarıyıl tatili 15-22 Ocak tarihleri arasında olacaktır. İyi tatiller dileriz.',
      priority: 'important',
      createdAt: '10.11.2025 14:30',
      createdBy: 'Okul Yönetimi',
      isRead: false,
    },
    {
      id: '2',
      title: 'Kütüphane Çalışma Saatleri',
      content: 'Kütüphane hafta içi 08:00-17:00 saatleri arasında açık olacaktır.',
      priority: 'normal',
      createdAt: '09.11.2025 10:00',
      createdBy: 'Müdürlük',
      isRead: true,
    },
  ]);

  const markAsRead = (id: string) => {
    setAnnouncements(announcements.map((a) => (a.id === id ? { ...a, isRead: true } : a)));
  };

  const filteredAnnouncements = announcements.filter((a) => {
    if (filter === 'unread') return !a.isRead;
    if (filter === 'read') return a.isRead;
    return true;
  });

  const getPriorityStyle = (priority: string) => {
    const styles = {
      normal: 'border-blue-500',
      important: 'border-orange-500',
      urgent: 'border-red-500',
    };
    return styles[priority as keyof typeof styles] || styles.normal;
  };

  const getPriorityBadge = (priority: string) => {
    const badges = {
      normal: { text: 'Normal', color: 'bg-blue-100 text-blue-700' },
      important: { text: 'Önemli', color: 'bg-orange-100 text-orange-700' },
      urgent: { text: 'Acil', color: 'bg-red-100 text-red-700' },
    };
    return badges[priority as keyof typeof badges] || badges.normal;
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Tüm Duyurular</h1>

        {/* Filtreler */}
        <div className="flex gap-2">
          {[
            { value: 'all' as const, label: 'Tümü' },
            { value: 'unread' as const, label: 'Okunmamış' },
            { value: 'read' as const, label: 'Okunmuş' },
          ].map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === f.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Duyuru Listesi */}
      {filteredAnnouncements.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="text-6xl mb-4">📢</div>
          <p className="text-gray-500">Henüz duyuru bulunmamaktadır.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => {
            const priorityBadge = getPriorityBadge(announcement.priority);
            const priorityStyle = getPriorityStyle(announcement.priority);

            return (
              <div
                key={announcement.id}
                className={`bg-white p-5 rounded-lg border-l-4 ${priorityStyle} shadow-sm ${
                  !announcement.isRead ? 'bg-blue-50' : ''
                }`}
                onClick={() => !announcement.isRead && markAsRead(announcement.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {!announcement.isRead && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      )}
                      <h3
                        className={`text-lg ${
                          announcement.isRead ? 'font-medium text-gray-900' : 'font-bold text-gray-900'
                        }`}
                      >
                        {announcement.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${priorityBadge.color}`}>
                        {priorityBadge.text}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{announcement.createdAt}</span>
                </div>

                <p className="text-sm text-gray-600 mb-3 whitespace-pre-wrap">{announcement.content}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Yayınlayan: {announcement.createdBy}</span>
                  {announcement.isRead && (
                    <span className="text-xs text-green-600 font-medium">✓ Okundu</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
