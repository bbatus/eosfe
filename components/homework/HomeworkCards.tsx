'use client';

import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { ClipboardIcon, CheckIcon, BellIcon } from '@/components/icons/Icons';
import { JSX } from 'react';

const SendIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

interface HomeworkCard {
  id: string;
  title: string;
  description: string;
  icon: () => JSX.Element;
  action: string;
}

const homeworkCards: HomeworkCard[] = [
  {
    id: 'add',
    title: 'Ödev Ekle',
    description: 'Yeni bir ödev ekleyin',
    icon: ClipboardIcon,
    action: 'add',
  },
  {
    id: 'assign',
    title: 'Ödev Ata',
    description: 'Ödev ataması yapın',
    icon: SendIcon,
    action: 'assign',
  },
  {
    id: 'check',
    title: 'Ödev Kontrol',
    description: 'Ödevleri kontrol edin',
    icon: CheckIcon,
    action: 'check',
  },
  {
    id: 'notify',
    title: 'Bildirim Gönder',
    description: 'Ödev ile ilgili bildirim gönderin',
    icon: BellIcon,
    action: 'notify',
  },
  {
    id: 'reports',
    title: 'Ödev Raporları',
    description: 'Ödev raporlarını görüntüleyin',
    icon: ChartIcon,
    action: 'reports',
  },
];

export default function HomeworkCards() {
  const router = useRouter();

  return (
    <div>
      <nav className="text-sm text-gray-600 mb-4">
        <span>Anasayfa</span>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900">Ödev Takip</span>
      </nav>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Ödev Takip Modülü</h1>
        <p className="text-sm text-gray-600">Ödev yönetimi için bir işlem seçin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {homeworkCards.map((card) => {
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
                  onClick={() => router.push(`/homework?action=${card.action}`)}
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
