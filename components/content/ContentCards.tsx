'use client';

import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { JSX } from 'react';

const PDFIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const ImageIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const VideoIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

interface ContentCard {
  id: string;
  title: string;
  description: string;
  icon: () => JSX.Element;
  type: string;
  color: string;
}

const contentCards: ContentCard[] = [
  {
    id: 'pdf',
    title: 'PDF Ekle',
    description: 'Yeni bir PDF dosyası kaydı ekleyin',
    icon: PDFIcon,
    type: 'pdf',
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 'image',
    title: 'Resim Ekle',
    description: 'Yeni bir fotoğraf kaydı ekleyin',
    icon: ImageIcon,
    type: 'image',
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'video',
    title: 'Video Ekle',
    description: 'Yeni bir video kaydı ekleyin',
    icon: VideoIcon,
    type: 'video',
    color: 'bg-purple-100 text-purple-600',
  },
];

export default function ContentCards() {
  const router = useRouter();

  return (
    <div>
      <nav className="text-sm text-gray-600 mb-4">
        <span>Anasayfa</span>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900">İçerik Yönetimi</span>
      </nav>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">İçerik Yönetimi Modülü</h1>
        <p className="text-sm text-gray-600">İçerik türü seçerek yeni içerik ekleyin</p>
      </div>

      {/* Tüm İçerikleri Görüntüle Butonu */}
      <div className="mb-6">
        <Button variant="secondary" onClick={() => router.push('/content?action=list')}>
          📂 Tüm İçerikleri Görüntüle
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contentCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <Card key={card.id} hover className="flex flex-col">
              <div className="flex flex-col items-center text-center mb-4">
                <div className={`w-16 h-16 ${card.color} rounded-xl flex items-center justify-center mb-4`}>
                  <IconComponent />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
              <div className="mt-auto">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => router.push(`/content?action=add&type=${card.type}`)}
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
