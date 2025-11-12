'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function LoginPage() {
  const router = useRouter();
  const params = useParams();
  const role = params.role as string;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const roleLabels: Record<string, string> = {
    admin: 'Yönetici',
    teacher: 'Öğretmen',
    student: 'Öğrenci',
    parent: 'Veli',
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add authentication logic
    console.log('Login:', { username, password, role, rememberMe });
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <button 
            onClick={() => router.push('/')}
            className="inline-flex items-center justify-center w-16 h-16 bg-[#2B7FFF] rounded-xl mb-4 hover:bg-[#1a6eef] transition-colors"
          >
            <span className="text-3xl font-bold text-white">E</span>
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {roleLabels[role] || 'Kullanıcı'} Girişi
          </h2>
          <p className="text-sm text-gray-500">Hesabınıza giriş yapın</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Kullanıcı adı"
                value={username}
                onChange={setUsername}
              />
            </div>

            <div>
              <Input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={setPassword}
                showPasswordToggle
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#2B7FFF] border-gray-300 rounded focus:ring-1 focus:ring-[#2B7FFF] cursor-pointer"
                />
                <span className="ml-2 text-gray-600 group-hover:text-gray-900">Beni Hatırla</span>
              </label>
              <button type="button" className="text-[#2B7FFF] hover:text-[#1a6eef] font-medium">
                Şifremi Unuttum
              </button>
            </div>

            <Button type="submit" variant="primary" fullWidth className="py-3 mt-6">
              Giriş Yap
            </Button>
          </form>
        </div>

        {/* Back Button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => router.push('/')}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← Geri dön
          </button>
        </div>
      </div>
    </div>
  );
}
