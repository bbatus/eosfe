'use client';

import { useRouter } from 'next/navigation';
import { AdminIcon, TeacherIcon, StudentIcon, ParentIcon } from '@/components/icons/Icons';

export default function Home() {
  const router = useRouter();

  const roles = [
    { 
      id: 'admin', 
      label: 'Yönetici Girişi', 
      icon: <AdminIcon />
    },
    { 
      id: 'teacher', 
      label: 'Öğretmen Girişi', 
      icon: <TeacherIcon />
    },
    { 
      id: 'student', 
      label: 'Öğrenci Girişi', 
      icon: <StudentIcon />
    },
    { 
      id: 'parent', 
      label: 'Veli Girişi', 
      icon: <ParentIcon />
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-4 shadow-lg border-2 border-gray-100">
            <img 
              src="/eoslogomavi.png" 
              alt="EOS Logo" 
              className="w-14 h-14 object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            EOS'a Hoş Geldin!
          </h1>
          <p className="text-sm text-gray-500">Giriş türünü seçin</p>
        </div>

        {/* Login selection card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="space-y-2">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => router.push(`/login/${role.id}`)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-md border border-gray-200 hover:border-[#2B7FFF] hover:bg-blue-50 transition-all text-gray-700 hover:text-[#2B7FFF]"
              >
                <div className="flex-shrink-0">
                  {role.icon}
                </div>
                <span className="text-sm font-medium">{role.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-400">
          © 2025 EOS
        </div>
      </div>
    </div>
  );
}
