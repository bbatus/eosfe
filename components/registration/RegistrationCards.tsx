'use client';

import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { UsersIcon, UserIcon, DocumentIcon, HomeIcon } from '@/components/icons/Icons';
import { JSX } from 'react';

const KeyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </svg>
);

interface RegistrationCard {
  id: string;
  title: string;
  description: string;
  icon: () => JSX.Element;
  type: string;
}

const registrationCards: RegistrationCard[] = [
  {
    id: 'student',
    title: 'Öğrenci Ekle',
    description: 'Yeni bir öğrenci kaydı ekleyin',
    icon: UsersIcon,
    type: 'student',
  },
  {
    id: 'teacher',
    title: 'Öğretmen Ekle',
    description: 'Yeni bir öğretmen kaydı ekleyin',
    icon: UserIcon,
    type: 'teacher',
  },
  {
    id: 'course',
    title: 'Ders Ekle',
    description: 'Yeni bir ders kaydı ekleyin',
    icon: DocumentIcon,
    type: 'course',
  },
  {
    id: 'class',
    title: 'Sınıf Ekle',
    description: 'Yeni bir sınıf kaydı ekleyin',
    icon: HomeIcon,
    type: 'class',
  },
  {
    id: 'branch',
    title: 'Şube Ekle',
    description: 'Yeni bir şube kaydı ekleyin',
    icon: KeyIcon,
    type: 'branch',
  },
];

export default function RegistrationCards() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Kayıt Modülü</h1>
        <p className="text-sm text-gray-600">Yeni kayıt eklemek için bir seçenek seçin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {registrationCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <Card key={card.id} hover className="flex flex-col">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-16 h-16 bg-[#E7F3FF] rounded-xl flex items-center justify-center mb-4 text-[#2B7FFF]">
                  <IconComponent />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
              <div className="mt-auto">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => router.push(`/registration?type=${card.type}`)}
                  className="text-sm"
                >
                  {card.title}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
