import { ReactNode } from 'react';

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  roles: ('admin' | 'teacher' | 'student' | 'parent')[];
}

export const modules: Module[] = [
  {
    id: 'notifications',
    title: 'Bildirimler',
    description: 'Öğrencilere ve velilere anlık bildirimler gönderin.',
    icon: 'bell',
    path: '/notifications',
    roles: ['admin', 'teacher', 'student', 'parent'],
  },
  {
    id: 'registration',
    title: 'Kayıt Modülü',
    description: 'Yeni öğrenci kayıtlarını yönetin ve mevcut kayıtları görüntüleyin.',
    icon: 'users',
    path: '/registration',
    roles: ['admin'],
  },
  {
    id: 'exam',
    title: 'Sınav Modülü',
    description: 'Sınav takvimi düşünün, sonuçları girin ve analizleri görüntüleyin.',
    icon: 'document',
    path: '/exam',
    roles: ['admin', 'teacher', 'student', 'parent'],
  },
  {
    id: 'attendance',
    title: 'Yoklama Modülü',
    description: 'Ders ve etkinlik yoklamalarını kolayca alın ve raporlayın.',
    icon: 'check',
    path: '/attendance',
    roles: ['admin', 'teacher', 'student', 'parent'],
  },
  {
    id: 'homework',
    title: 'Ödev Takip Modülü',
    description: 'Ödevleri oluşturun, takip edin ve değerlendirmelerinizi girin.',
    icon: 'clipboard',
    path: '/homework',
    roles: ['admin', 'teacher', 'student', 'parent'],
  },
  {
    id: 'guidance',
    title: 'Rehberlik Modülü',
    description: 'Öğrenci rehberlik ve danışmanlık süreçlerini yönetin.',
    icon: 'target',
    path: '/guidance',
    roles: ['admin', 'teacher', 'student', 'parent'],
  },
  {
    id: 'content',
    title: 'İçerik Yönetimi',
    description: 'PDF, resim ve video içeriklerini yönetin.',
    icon: 'folder',
    path: '/content',
    roles: ['admin', 'teacher', 'student'],
  },
  {
    id: 'messages',
    title: 'Mesajlaşma',
    description: 'Veliler, öğrenciler ve öğretmenlerle mesajlaşın.',
    icon: 'mail',
    path: '/messages',
    roles: ['admin', 'teacher', 'student', 'parent'],
  },
  {
    id: 'meal',
    title: 'Yemek Programı',
    description: 'Yemek menüsü planlaması ve öğrenci yoklaması yapın.',
    icon: 'utensils',
    path: '/meal',
    roles: ['admin', 'teacher', 'student', 'parent'],
  },
  {
    id: 'schedule',
    title: 'Ders Programı',
    description: 'Haftalık ders programını oluşturun ve düzenleyin.',
    icon: 'calendar',
    path: '/schedule',
    roles: ['admin', 'teacher', 'student', 'parent'],
  },
  {
    id: 'events',
    title: 'Etkinlikler',
    description: 'Okul etkinliklerini yönetin ve resim ekleyin.',
    icon: 'sparkles',
    path: '/events',
    roles: ['admin', 'teacher', 'student', 'parent'],
  },
  {
    id: 'gallery',
    title: 'Öğrenci Galerisi',
    description: 'Öğrenci fotoğraf galerilerini yönetin.',
    icon: 'photograph',
    path: '/gallery',
    roles: ['admin', 'teacher', 'student', 'parent'],
  },
];
