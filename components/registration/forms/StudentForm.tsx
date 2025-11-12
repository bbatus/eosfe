'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface StudentFormProps {
  action: string;
}

export default function StudentForm({ action }: StudentFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentNumber: '',
    email: '',
    phone: '',
    birthDate: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Student form submitted:', formData);
    // TODO: API call
    router.push('/registration');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div className="mb-6">
        <button
          onClick={() => router.push('/registration')}
          className="text-sm text-gray-600 hover:text-gray-900 mb-4 flex items-center gap-2"
        >
          <span>←</span> Geri
        </button>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {action === 'add' ? 'Öğrenci Ekle' : 'Öğrenci Düzenle'}
        </h1>
        <p className="text-sm text-gray-600">Öğrenci bilgilerini girin</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ad</label>
              <Input
                type="text"
                placeholder="Ad"
                value={formData.firstName}
                onChange={(value) => handleChange('firstName', value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
              <Input
                type="text"
                placeholder="Soyad"
                value={formData.lastName}
                onChange={(value) => handleChange('lastName', value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Öğrenci No</label>
              <Input
                type="text"
                placeholder="Öğrenci No"
                value={formData.studentNumber}
                onChange={(value) => handleChange('studentNumber', value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
              <Input
                type="email"
                placeholder="E-posta"
                value={formData.email}
                onChange={(value) => handleChange('email', value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
              <Input
                type="text"
                placeholder="Telefon"
                value={formData.phone}
                onChange={(value) => handleChange('phone', value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Doğum Tarihi</label>
              <Input
                type="text"
                placeholder="GG/AA/YYYY"
                value={formData.birthDate}
                onChange={(value) => handleChange('birthDate', value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Adres</label>
            <Input
              type="text"
              placeholder="Adres"
              value={formData.address}
              onChange={(value) => handleChange('address', value)}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" variant="primary" className="flex-1">
              Kaydet
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => router.push('/registration')}
              className="flex-1"
            >
              İptal
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
