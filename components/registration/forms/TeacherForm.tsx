'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';

export default function TeacherForm() {
  const router = useRouter();
  // Form for adding/editing teachers
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    tcNo: '',
    branch: '',
    phone: '',
    birthDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Teacher form submitted:', formData);
    router.push('/registration?type=teacher');
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
            onClick={() => router.push('/registration?type=teacher')}
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
        <h1 className="text-3xl font-bold text-gray-900 text-center">Öğretmen Ekle</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
              <Input
                type="text"
                placeholder="Ad"
                value={formData.firstName}
                onChange={(value) => handleChange('firstName', value)}
              />
              <p className="text-xs text-gray-500 mt-1">{formData.firstName.length}/50</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
              <Input
                type="text"
                placeholder="Soyad"
                value={formData.lastName}
                onChange={(value) => handleChange('lastName', value)}
              />
              <p className="text-xs text-gray-500 mt-1">{formData.lastName.length}/50</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">TC Kimlik No</label>
              <Input
                type="text"
                placeholder="TC Kimlik No"
                value={formData.tcNo}
                onChange={(value) => handleChange('tcNo', value)}
                className="max-w-md"
              />
              <p className="text-xs text-gray-500 mt-1">{formData.tcNo.length}/11</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bölüm</label>
              <select
                value={formData.branch}
                onChange={(e) => handleChange('branch', e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-sm"
              >
                <option value="">Bölüm Seçin</option>
                <option value="matematik">Matematik</option>
                <option value="turkce">Türkçe</option>
                <option value="tarih">Tarih</option>
                <option value="fen">Fen Bilgisi</option>
                <option value="ingilizce">İngilizce</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon Numarası</label>
              <Input
                type="text"
                placeholder="553 105 8547"
                value={formData.phone}
                onChange={(value) => handleChange('phone', value)}
                className="max-w-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Doğum Tarihi</label>
              <Input
                type="text"
                placeholder="GG/AA/YYYY"
                value={formData.birthDate}
                onChange={(value) => handleChange('birthDate', value)}
                className="max-w-md"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
