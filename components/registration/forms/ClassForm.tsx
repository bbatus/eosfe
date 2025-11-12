'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';

export default function ClassForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    className: '',
    dailyLessonCount: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Class form submitted:', formData);
    router.push('/registration?type=class');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header with Back and Save */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push('/registration?type=class')}
            className="flex items-center gap-2 px-4 py-2 bg-[#2B7FFF] text-white rounded-md hover:bg-[#1a6eef] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Geri Dön</span>
          </button>
          
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            Kaydet
          </button>
        </div>
      </div>

      {/* Main Title */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center">Sınıf Ekle</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sınıf Adı</label>
              <Input
                type="text"
                placeholder="Sınıf Adı"
                value={formData.className}
                onChange={(value) => handleChange('className', value)}
              />
              <p className="text-xs text-gray-500 mt-1">{formData.className.length}/50</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Günlük Ders Sayısı</label>
              <select
                value={formData.dailyLessonCount}
                onChange={(e) => handleChange('dailyLessonCount', e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-sm"
              >
                <option value="">Ders sayısını seçin</option>
                <option value="6">6 Ders</option>
                <option value="7">7 Ders</option>
                <option value="8">8 Ders</option>
                <option value="9">9 Ders</option>
                <option value="10">10 Ders</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
