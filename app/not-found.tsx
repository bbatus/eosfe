'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2B7FFF] to-[#1a6eef] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-6">
          <div className="text-8xl font-bold text-[#2B7FFF] mb-2">404</div>
          <div className="text-2xl font-semibold text-gray-900 mb-2">Sayfa Bulunamadı</div>
          <p className="text-gray-600">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="block w-full bg-[#2B7FFF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a6eef] transition-colors"
          >
            Anasayfaya Dön
          </Link>
          <button
            onClick={() => window.history.back()}
            className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Geri Git
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Yardıma mı ihtiyacınız var?{' '}
            <Link href="/messages" className="text-[#2B7FFF] hover:underline">
              Destek ekibiyle iletişime geçin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
