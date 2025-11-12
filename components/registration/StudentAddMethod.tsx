'use client';

import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const FormIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ExcelIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function StudentAddMethod() {
  const router = useRouter();

  const methods = [
    {
      id: 'manual',
      title: 'Manuel Ekle',
      description: 'Tek öğrenci bilgilerini manuel olarak girin',
      icon: FormIcon,
      method: 'manual',
    },
    {
      id: 'bulk',
      title: 'Toplu Ekle',
      description: 'Excel dosyası ile toplu öğrenci ekleyin',
      icon: ExcelIcon,
      method: 'bulk',
    },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span className="hover:text-gray-700 cursor-pointer">Ana Sayfa</span>
        <span className="mx-2">›</span>
        <span className="hover:text-gray-700 cursor-pointer" onClick={() => router.push('/registration')}>
          Kayıt Modülü
        </span>
        <span className="mx-2">›</span>
        <span className="hover:text-gray-700 cursor-pointer" onClick={() => router.push('/registration?type=student')}>
          Öğrenci
        </span>
        <span className="mx-2">›</span>
        <span className="text-gray-900 font-medium">Ekle</span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => router.push('/registration?type=student')}
          className="text-sm text-gray-600 hover:text-gray-900 mb-4 flex items-center gap-2"
        >
          <span>←</span> Geri
        </button>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Öğrenci Ekle</h1>
        <p className="text-sm text-gray-600">Ekleme yöntemini seçin</p>
      </div>

      {/* Method Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {methods.map((method) => {
          const IconComponent = method.icon;
          return (
            <Card key={method.id} hover className="flex flex-col">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-[#E7F3FF] rounded-xl flex items-center justify-center mb-4 text-[#2B7FFF]">
                  <IconComponent />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
              <div className="mt-auto">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => router.push(`/registration?type=student&action=add&method=${method.method}`)}
                >
                  {method.title}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
