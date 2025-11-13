'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { modules } from '@/lib/modules';

interface TopBarProps {
  username: string;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'normal' | 'important' | 'urgent';
  createdAt: string;
  isRead: boolean;
}

export default function TopBar({ username }: TopBarProps) {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock announcements
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: '1',
      title: 'Yarıyıl Tatili Duyurusu',
      content: 'Değerli öğrenciler ve veliler, yarıyıl tatili 15-22 Ocak tarihleri arasında olacaktır.',
      priority: 'important',
      createdAt: '2 saat önce',
      isRead: false,
    },
    {
      id: '2',
      title: 'Kütüphane Çalışma Saatleri',
      content: 'Kütüphane hafta içi 08:00-17:00 saatleri arasında açık olacaktır.',
      priority: 'normal',
      createdAt: '1 gün önce',
      isRead: true,
    },
  ]);

  const unreadCount = announcements.filter((a) => !a.isRead).length;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter modules based on search query
  const filteredModules = modules.filter((module) =>
    module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    module.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSearchResults(e.target.value.length > 0);
  };

  const handleModuleClick = (path: string) => {
    router.push(path);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  const markAllAsRead = () => {
    setAnnouncements(announcements.map((a) => ({ ...a, isRead: true })));
  };

  const markAsRead = (id: string) => {
    setAnnouncements(announcements.map((a) => (a.id === id ? { ...a, isRead: true } : a)));
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      normal: 'border-blue-500',
      important: 'border-orange-500',
      urgent: 'border-red-500',
    };
    return colors[priority as keyof typeof colors] || colors.normal;
  };

  return (
    <header className="bg-gradient-to-r from-[#2B7FFF] via-[#2470eb] to-[#1a6eef] shadow-lg px-4 md:px-6 py-3.5 mt-4 mx-4 rounded-xl sticky top-4 z-30 border border-white/10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Arama */}
          <div className="relative hidden md:block" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Modül ara..."
                className="w-64 pl-10 pr-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
              />
              <svg className="w-5 h-5 absolute left-3 top-2.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Arama Sonuçları */}
            {showSearchResults && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
                {filteredModules.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    <p className="text-sm">Sonuç bulunamadı</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {filteredModules.map((module) => (
                      <button
                        key={module.id}
                        onClick={() => handleModuleClick(module.path)}
                        className="w-full p-3 text-left hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">{module.title}</h4>
                        <p className="text-xs text-gray-600 line-clamp-1">{module.description}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Bildirim Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2.5 text-white/90 hover:bg-white/20 rounded-xl transition-all duration-200 relative hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 px-1.5 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full ring-2 ring-white min-w-[18px] text-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Dropdown */}
            {showNotifications && (
              <div className="fixed sm:absolute left-4 right-4 top-20 sm:left-auto sm:right-0 sm:top-auto mt-0 sm:mt-2 w-auto sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-[500px] flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">Duyurular</h3>
                    {unreadCount > 0 && (
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {unreadCount} yeni
                      </span>
                    )}
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Tümünü Okundu İşaretle
                    </button>
                  )}
                </div>

                {/* Duyuru Listesi */}
                <div className="overflow-y-auto flex-1">
                  {announcements.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      <p className="text-sm">Henüz duyuru bulunmamaktadır.</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-100">
                      {announcements.map((announcement) => (
                        <button
                          key={announcement.id}
                          onClick={() => {
                            markAsRead(announcement.id);
                            router.push('/announcements/view');
                            setShowNotifications(false);
                          }}
                          className={`w-full p-4 text-left hover:bg-gray-50 transition-colors border-l-4 ${getPriorityColor(
                            announcement.priority
                          )} ${!announcement.isRead ? 'bg-blue-50' : ''}`}
                        >
                          <div className="flex items-start gap-2 mb-1">
                            {!announcement.isRead && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            )}
                            <h4
                              className={`text-sm flex-1 ${
                                announcement.isRead ? 'font-medium text-gray-900' : 'font-bold text-gray-900'
                              }`}
                            >
                              {announcement.title}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-2 mb-2">{announcement.content}</p>
                          <span className="text-xs text-gray-500">{announcement.createdAt}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-gray-200 bg-gray-50">
                  <button
                    onClick={() => {
                      router.push('/announcements/view');
                      setShowNotifications(false);
                    }}
                    className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Tüm Duyuruları Gör →
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-white ml-2 bg-white/15 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/20 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">{currentTime}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
