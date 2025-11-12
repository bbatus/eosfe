'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import * as Icons from '@/components/icons/Icons';
import { JSX } from 'react';

interface SidebarProps {
  userRole: 'admin' | 'teacher' | 'student' | 'parent';
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: () => JSX.Element;
  roles: string[];
  path: string;
}

const menuItems: MenuItem[] = [
  { id: 'home', label: 'Anasayfa', icon: Icons.HomeIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/dashboard' },
  { id: 'notifications', label: 'Bildirimler', icon: Icons.BellIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/notifications' },
  { id: 'registration', label: 'Kayıt Modülü', icon: Icons.UsersIcon, roles: ['admin'], path: '/registration' },
  { id: 'attendance', label: 'Yoklama', icon: Icons.CheckIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/attendance' },
  { id: 'exam', label: 'Sınavlar', icon: Icons.DocumentIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/exam' },
  { id: 'guidance', label: 'Rehberlik', icon: Icons.TargetIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/guidance' },
  { id: 'homework', label: 'Ödevler', icon: Icons.ClipboardIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/homework' },
  { id: 'content', label: 'İçerik', icon: Icons.FolderIcon, roles: ['admin', 'teacher', 'student'], path: '/content' },
  { id: 'profile', label: 'Profil', icon: Icons.UserIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/profile' },
  { id: 'announcements', label: 'Duyurular', icon: Icons.SpeakerphoneIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/announcements' },
  { id: 'chatbot', label: 'Chatbot', icon: Icons.ChatIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/chatbot' },
  { id: 'meal', label: 'Yemek', icon: Icons.UtensilsIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/meal' },
  { id: 'schedule', label: 'Ders Programı', icon: Icons.CalendarIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/schedule' },
  { id: 'events', label: 'Etkinlikler', icon: Icons.SparklesIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/events' },
  { id: 'gallery', label: 'Galeri', icon: Icons.PhotographIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/gallery' },
  { id: 'messages', label: 'Mesajlar', icon: Icons.MailIcon, roles: ['admin', 'teacher', 'student', 'parent'], path: '/messages' },
];

export default function Sidebar({ userRole, isCollapsed = false, onToggleCollapse }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [internalCollapsed, setInternalCollapsed] = useState(isCollapsed);
  const visibleItems = menuItems.filter((item) => item.roles.includes(userRole));

  const collapsed = onToggleCollapse ? isCollapsed : internalCollapsed;
  const toggleCollapse = onToggleCollapse || (() => setInternalCollapsed(!internalCollapsed));

  // Aktif menü öğesini belirle
  const isActive = (path: string) => {
    // Tam eşleşme
    if (pathname === path) return true;
    
    // Dashboard için özel durum - sadece tam eşleşme
    if (path === '/dashboard') return pathname === '/dashboard';
    
    // Diğer sayfalar için path ile başlıyorsa aktif
    if (path !== '/dashboard' && pathname.startsWith(path)) return true;
    
    return false;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          bg-white border-r border-gray-200 flex flex-col
          transform transition-all duration-300 ease-in-out
          ${collapsed ? 'w-20' : 'w-64'}
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="p-5 border-b border-gray-200 bg-gradient-to-br from-white to-gray-50 relative">
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
            <div className="w-11 h-11 bg-gradient-to-br from-[#2B7FFF] via-[#2470eb] to-[#1a6eef] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 ring-2 ring-blue-100 flex-shrink-0">
              E
            </div>
            {!collapsed && (
              <div className="transition-opacity duration-200">
                <h1 className="font-bold text-gray-900 text-base tracking-tight">EOS</h1>
                <p className="text-xs text-gray-500 font-medium">Eğitim Sistemi</p>
              </div>
            )}
          </div>
          
          {/* Collapse Toggle Button - Desktop only */}
          <button
            onClick={toggleCollapse}
            className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white border border-gray-200 rounded-full items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            title={collapsed ? 'Genişlet' : 'Daralt'}
          >
            <svg
              className={`w-3 h-3 text-gray-600 transition-transform duration-200 ${collapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          <ul className="space-y-0.5">
            {visibleItems.map((item) => {
              const IconComponent = item.icon;
              const active = isActive(item.path);
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      router.push(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-lg text-left transition-all duration-200 relative group ${
                      active
                        ? 'bg-gradient-to-r from-[#E7F3FF] to-[#F0F7FF] text-[#2B7FFF] font-semibold shadow-sm border border-[#2B7FFF]/10'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    title={collapsed ? item.label : ''}
                  >
                    <div className={`${active ? 'scale-110' : ''} flex-shrink-0`}>
                      <IconComponent />
                    </div>
                    {!collapsed && (
                      <>
                        <span className="text-sm">{item.label}</span>
                        {active && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#2B7FFF]"></div>
                        )}
                      </>
                    )}
                    
                    {/* Tooltip for collapsed mode */}
                    {collapsed && (
                      <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 pointer-events-none">
                        {item.label}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                      </div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-3 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => {
              router.push('/');
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center ${collapsed ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 font-medium relative group`}
            title={collapsed ? 'Çıkış Yap' : ''}
          >
            <Icons.LogoutIcon />
            {!collapsed && <span className="text-sm">Çıkış Yap</span>}
            
            {/* Tooltip for collapsed mode */}
            {collapsed && (
              <div className="absolute left-full ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 pointer-events-none">
                Çıkış Yap
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
              </div>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
