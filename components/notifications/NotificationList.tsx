'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface Notification {
  id: string;
  title: string;
  content: string;
  sender: string;
  recipientType: 'students' | 'parents' | 'teachers' | 'all';
  recipientCount: number;
  status: 'sent' | 'pending';
  sentAt: string;
}

export default function NotificationList() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Yarıyıl Tatili Duyurusu',
      content: 'Değerli velilerimiz, yarıyıl tatili 15-22 Ocak tarihleri arasında olacaktır...',
      sender: 'Okul Yönetimi',
      recipientType: 'all',
      recipientCount: 450,
      status: 'sent',
      sentAt: '10.11.2025 14:30',
    },
  ]);
  const [filterType, setFilterType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const getRecipientBadge = (type: string) => {
    const badges = {
      students: { text: 'Öğrenciler', color: 'bg-blue-100 text-blue-700', icon: '🎓' },
      parents: { text: 'Veliler', color: 'bg-purple-100 text-purple-700', icon: '👨‍👩‍👧' },
      teachers: { text: 'Öğretmenler', color: 'bg-green-100 text-green-700', icon: '👨‍🏫' },
      all: { text: 'Tümü', color: 'bg-orange-100 text-orange-700', icon: '📢' },
    };
    return badges[type as keyof typeof badges] || badges.all;
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      sent: { text: 'Gönderildi', color: 'bg-green-100 text-green-700', icon: '✓' },
      pending: { text: 'Bekliyor', color: 'bg-orange-100 text-orange-700', icon: '⏳' },
    };
    return badges[status as keyof typeof badges] || badges.sent;
  };

  const filteredNotifications = notifications.filter((notif) => {
    const matchesType = !filterType || notif.recipientType === filterType;
    const matchesSearch =
      !searchTerm ||
      notif.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notif.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <span>Anasayfa</span>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900">Bildirimler</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Bildirimler</h1>
        <p className="text-sm text-gray-600">
          Gönderilen bildirimleri görüntüleyin veya yeni bildirim gönderin
        </p>
      </div>

      {/* Bildirim Gönder Butonu */}
      <div className="mb-8 flex justify-center">
        <Button
          variant="primary"
          onClick={() => router.push('/notifications?action=send')}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 text-lg"
        >
          <span className="text-2xl mr-2">🔔</span>
          Bildirim Gönder
        </Button>
      </div>

      {/* Filtreler */}
      {notifications.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Tüm Alıcılar</option>
            <option value="students">Öğrenciler</option>
            <option value="parents">Veliler</option>
            <option value="teachers">Öğretmenler</option>
            <option value="all">Tümü</option>
          </select>

          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Başlık veya içerikte ara..."
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
      )}

      {/* Bildirim Listesi */}
      {filteredNotifications.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <div className="text-6xl mb-4">🔔</div>
          <p className="text-lg font-medium text-gray-700 mb-2">Henüz hiçbir bildirim yok.</p>
          <p className="text-sm text-gray-500">Bildirim geldiği zaman size haber vereceğiz.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredNotifications.map((notification) => {
            const recipientBadge = getRecipientBadge(notification.recipientType);
            const statusBadge = getStatusBadge(notification.status);

            return (
              <div
                key={notification.id}
                className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{notification.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${recipientBadge.color}`}>
                        {recipientBadge.icon} {recipientBadge.text}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${statusBadge.color}`}>
                        {statusBadge.icon} {statusBadge.text}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{notification.sentAt}</span>
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{notification.content}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Gönderen: {notification.sender}</span>
                  <span>{notification.recipientCount} kişiye gönderildi</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
