'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import ModuleCard from '@/components/dashboard/ModuleCard';
import { modules } from '@/lib/modules';
import { useFavorites } from '@/hooks/useFavorites';

interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'normal' | 'important' | 'urgent';
  createdAt: string;
  isRead: boolean;
}

export default function DashboardPage() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<'admin' | 'teacher' | 'student' | 'parent'>('admin');
  const [username, setUsername] = useState('eosadmin');
  const [currentTime, setCurrentTime] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { favorites, mounted } = useFavorites();
  const searchRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Update time
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

  // Filter modules based on user role
  const visibleModules = modules.filter((module) =>
    module.roles.includes(userRole)
  );

  // Sort modules: favorites first (only after mounted to prevent hydration mismatch)
  const favoriteModules = mounted 
    ? visibleModules.filter((m) => favorites.includes(m.id))
    : [];
  
  const otherModules = mounted
    ? visibleModules.filter((m) => !favorites.includes(m.id))
    : visibleModules;

  const roleLabels: Record<string, string> = {
    admin: 'Admin',
    teacher: 'Öğretmen',
    student: 'Öğrenci',
    parent: 'Veli',
  };

  return (
    <div className="flex h-screen bg-[#F0F2F5]">
      <Sidebar userRole={userRole} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto pt-4">
          <PageContainer>
            {/* Welcome Banner with all features */}
            <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white shadow-lg">
              {/* Top Row: User info + Actions */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shadow-sm">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold mb-1">
                      Hoş geldiniz, {username}
                    </h1>
                    <p className="text-blue-100">
                      Sisteminizi buradan yönetebilirsiniz
                    </p>
                  </div>
                </div>

                {/* Right Side: Search, Notifications, Clock */}
                <div className="flex items-center gap-3">
                  {/* Search */}
                  <div className="relative" ref={searchRef}>
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

                    {/* Search Results */}
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

                  {/* Notifications */}
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

                    {/* Notification Dropdown */}
                    {showNotifications && (
                      <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-[500px] flex flex-col">
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

                        {/* Announcement List */}
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

                  {/* Clock */}
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-bold text-white">{currentTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Favorite Modules */}
            {favoriteModules.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
                  <svg className="w-5 h-5 text-yellow-500 fill-yellow-500" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <h2 className="text-lg font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Hızlı Erişim
                  </h2>
                  <span className="text-sm text-yellow-700 font-medium">({favoriteModules.length})</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {favoriteModules.map((module) => (
                    <ModuleCard key={module.id} module={module} />
                  ))}
                </div>
              </div>
            )}

            {/* All Modules */}
            {otherModules.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {favoriteModules.length > 0 ? 'Tüm Modüller' : 'Modüller'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {otherModules.map((module) => (
                    <ModuleCard key={module.id} module={module} />
                  ))}
                </div>
              </div>
            )}
          </PageContainer>
        </main>
      </div>
    </div>
  );
}
