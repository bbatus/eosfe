'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function CourseForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    courseName: '',
    courseType: 'TYT',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Course form submitted:', formData);
    router.push('/registration?type=course');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <span className="hover:text-gray-700 cursor-pointer">Ana Sayfa</span>
        <span className="mx-2">›</span>
        <span className="hover:text-gray-700 cursor-pointer" onClick={() => router.push('/registration')}>
          Kayıt Modülü
        </span>
        <span className="mx-2">›</span>
        <span className="hover:text-gray-700 cursor-pointer" onClick={() => router.push('/registration?type=course')}>
          Ders Kayıt
        </span>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Ekle</span>
      </div>

      {/* Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Ders Ekle</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Ders Adı */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ders Adı</label>
          <Input
            type="text"
            placeholder="Ders adı giriniz..."
            value={formData.courseName}
            onChange={(value) => handleChange('courseName', value)}
          />
        </div>

        {/* Ders Türü */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Ders Türü</label>
          <div className="space-y-2">
            {['TYT', 'AYT', 'YDS', 'LGS'].map((type) => (
              <label key={type} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="courseType"
                  value={type}
                  checked={formData.courseType === type}
                  onChange={(e) => handleChange('courseType', e.target.value)}
                  className="w-4 h-4 text-[#2B7FFF] border-gray-300 focus:ring-[#2B7FFF]"
                />
                <span className="ml-3 text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/registration?type=course')}
            className="flex-1"
          >
            İptal Et
          </Button>
          <Button type="submit" variant="primary" className="flex-1">
            Kaydet
          </Button>
        </div>
      </form>
    </div>
  );
}
