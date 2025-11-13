'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useToast } from '@/contexts/ToastContext';

export default function LoginPage() {
  const router = useRouter();
  const params = useParams();
  const role = params.role as string;
  const { showToast } = useToast();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const roleLabels: Record<string, string> = {
    admin: 'Yönetici',
    teacher: 'Öğretmen',
    student: 'Öğrenci',
    parent: 'Veli',
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!username.trim()) {
      showToast('warning', 'Lütfen kullanıcı adınızı girin!');
      return;
    }

    if (!password.trim()) {
      showToast('warning', 'Lütfen şifrenizi girin!');
      return;
    }

    if (password.length < 4) {
      showToast('warning', 'Şifreniz en az 4 karakter olmalıdır!');
      return;
    }

    setIsLoading(true);

    // Simulated authentication (Backend entegrasyonunda bu kısım değişecek)
    try {
      // Backend'e istek atılacak
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password, role, rememberMe }),
      // });

      // Simülasyon: Demo amaçlı her zaman başarılı kabul ediyoruz
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 saniye bekleme

      // Demo: Bazı kullanıcı adları için hata göster
      if (username.toLowerCase() === 'error') {
        throw new Error('Hatalı kullanıcı adı veya şifre!');
      }

      if (username.toLowerCase() === 'banned') {
        throw new Error('Hesabınız askıya alınmıştır. Lütfen yönetici ile iletişime geçin.');
      }

      // Başarılı giriş
      showToast('success', 'Giriş başarılı! Yönlendiriliyorsunuz...', 2000);
      
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);

    } catch (error) {
      // Hata durumunda
      const errorMessage = error instanceof Error ? error.message : 'Giriş başarısız! Lütfen bilgilerinizi kontrol edin.';
      showToast('error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <button 
            onClick={() => router.push('/')}
            className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-4 hover:shadow-lg transition-all border-2 border-gray-100"
          >
            <img 
              src="/eoslogomavi.png" 
              alt="EOS Logo" 
              className="w-14 h-14 object-contain"
            />
          </button>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            EOS'a Hoş Geldin!
          </h2>
          <p className="text-sm text-gray-500">{roleLabels[role] || 'Kullanıcı'} girişi</p>
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

            <Button 
              type="submit" 
              variant="primary" 
              fullWidth 
              className="py-3 mt-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Giriş yapılıyor...</span>
                </div>
              ) : (
                'Giriş Yap'
              )}
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
