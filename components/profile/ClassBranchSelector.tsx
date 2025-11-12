'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function ClassBranchSelector() {
  const router = useRouter();
  const [classId, setClassId] = useState('');
  const [branchId, setBranchId] = useState('');

  const isValid = classId && branchId;

  const handleContinue = () => {
    if (isValid) {
      router.push(`/profile?class=${classId}&branch=${branchId}`);
    }
  };

  return (
    <div>
      {/* Kontroller */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="secondary" onClick={() => router.push('/dashboard')}>
          ← Geri Dön
        </Button>
        <Button
          variant="primary"
          onClick={handleContinue}
          disabled={!isValid}
          className={!isValid ? 'opacity-50 cursor-not-allowed' : ''}
        >
          Devam Et →
        </Button>
      </div>

      {/* Başlık */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sınıf ve Şube Seçimi</h1>
        <p className="text-sm text-gray-600">
          Öğrenci profilini görüntülemek için sınıf ve şube seçin
        </p>
      </div>

      {/* Form */}
      <div className="max-w-md mx-auto space-y-6">
        {/* Sınıf Seçimi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sınıf <span className="text-red-500">*</span>
          </label>
          <select
            value={classId}
            onChange={(e) => {
              setClassId(e.target.value);
              setBranchId(''); // Sınıf değişince şubeyi sıfırla
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            required
          >
            <option value="">Sınıf Seçin</option>
            <option value="9">9. Sınıf</option>
            <option value="10">10. Sınıf</option>
            <option value="11">11. Sınıf</option>
            <option value="12">12. Sınıf</option>
          </select>
        </div>

        {/* Şube Seçimi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Şube <span className="text-red-500">*</span>
          </label>
          <select
            value={branchId}
            onChange={(e) => setBranchId(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            disabled={!classId}
            required
          >
            <option value="">Şube Seçin</option>
            <option value="A">A Şubesi</option>
            <option value="B">B Şubesi</option>
            <option value="C">C Şubesi</option>
            <option value="D">D Şubesi</option>
          </select>
        </div>

        {/* Devam Et Butonu (Mobil için) */}
        <div className="pt-4">
          <Button
            variant="primary"
            fullWidth
            onClick={handleContinue}
            disabled={!isValid}
            className={!isValid ? 'opacity-50 cursor-not-allowed' : ''}
          >
            Devam Et →
          </Button>
        </div>
      </div>
    </div>
  );
}
