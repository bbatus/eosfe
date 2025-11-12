'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';

// Force dynamic rendering
export const dynamic = 'force-dynamic';
import PageContainer from '@/components/layout/PageContainer';
import ModuleCard from '@/components/dashboard/ModuleCard';
import { modules } from '@/lib/modules';
import { useFavorites } from '@/hooks/useFavorites';

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<'admin' | 'teacher' | 'student' | 'parent'>('admin');
  const [username, setUsername] = useState('eosadmin');
  const { favorites, mounted } = useFavorites();

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
        <TopBar username={username} />
        
        <main className="flex-1 overflow-y-auto">
          <PageContainer>
            {/* Welcome Banner with Gradient */}
            <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-1">
                    Hoş geldiniz, {username}
                  </h1>
                  <p className="text-blue-100">
                    Sisteminizi buradan yönetebilirsiniz
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
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
