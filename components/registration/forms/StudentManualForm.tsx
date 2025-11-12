'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';

export default function StudentManualForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    // Öğrenci Kimlik Bilgileri
    firstName: '',
    lastName: '',
    studentTcNo: '',
    
    // Veli İletişim Bilgileri
    parentName: '',
    parentTcNo: '',
    parentPhone: '',
    
    // Eğitim Bilgileri
    class: '',
    branch: '',
    teacher: '',
    birthDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Student manual form submitted:', formData);
    router.push('/registration?type=student');
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
            onClick={() => router.push('/registration?type=student')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
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
        <h1 className="text-3xl font-bold text-gray-900 text-center">Öğrenci Ekle</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
        {/* Öğrenci Kimlik Bilgileri */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Öğrenci Kimlik Bilgileri</h2>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Öğrenci TC Kimlik No</label>
              <Input
                type="text"
                placeholder="Öğrenci TC Kimlik No"
                value={formData.studentTcNo}
                onChange={(value) => handleChange('studentTcNo', value)}
                className="max-w-md"
              />
              <p className="text-xs text-gray-500 mt-1">{formData.studentTcNo.length}/11</p>
            </div>
          </div>
        </div>

        {/* Veli İletişim Bilgileri */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Veli İletişim Bilgileri</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Veli Ad Soyad</label>
              <Input
                type="text"
                placeholder="Veli Ad Soyad"
                value={formData.parentName}
                onChange={(value) => handleChange('parentName', value)}
              />
              <p className="text-xs text-gray-500 mt-1">{formData.parentName.length}/100</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Veli TC Kimlik No</label>
              <Input
                type="text"
                placeholder="Veli TC Kimlik No"
                value={formData.parentTcNo}
                onChange={(value) => handleChange('parentTcNo', value)}
                className="max-w-md"
              />
              <p className="text-xs text-gray-500 mt-1">{formData.parentTcNo.length}/11</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Veli Telefon Numarası</label>
              <Input
                type="text"
                placeholder="5531058547"
                value={formData.parentPhone}
                onChange={(value) => handleChange('parentPhone', value)}
                className="max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Eğitim Bilgileri */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Eğitim Bilgileri</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sınıf</label>
              <select
                value={formData.class}
                onChange={(e) => handleChange('class', e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-sm"
              >
                <option value="">Sınıf Seçin</option>
                <option value="9">9. Sınıf</option>
                <option value="10">10. Sınıf</option>
                <option value="11">11. Sınıf</option>
                <option value="12">12. Sınıf</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Şube</label>
              <select
                value={formData.branch}
                onChange={(e) => handleChange('branch', e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-sm"
              >
                <option value="">Şube Seçin</option>
                <option value="A">A Şubesi</option>
                <option value="B">B Şubesi</option>
                <option value="C">C Şubesi</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Öğretmen Seçimi</label>
              <select
                value={formData.teacher}
                onChange={(e) => handleChange('teacher', e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2B7FFF] focus:border-transparent text-sm"
              >
                <option value="">Öğretmen Seçin</option>
                <option value="teacher1">Ahmet Yılmaz</option>
                <option value="teacher2">Ayşe Demir</option>
                <option value="teacher3">Mehmet Kaya</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Doğum Tarihi</label>
              <Input
                type="text"
                placeholder="Öğrenci Doğum Tarihi"
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
