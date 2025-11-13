'use client';

import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import * as Icons from '@/components/icons/Icons';
import { useFavorites } from '@/hooks/useFavorites';

interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  roles: string[];
}

interface ModuleCardProps {
  module: Module;
}

const iconMap: Record<string, () => JSX.Element> = {
  bell: Icons.BellIcon,
  users: Icons.UsersIcon,
  document: Icons.DocumentIcon,
  check: Icons.CheckIcon,
  clipboard: Icons.ClipboardIcon,
  target: Icons.TargetIcon,
  folder: Icons.FolderIcon,
  user: Icons.UserIcon,
  speakerphone: Icons.SpeakerphoneIcon,
  chat: Icons.ChatIcon,
  cake: Icons.CakeIcon,
  utensils: Icons.UtensilsIcon,
  calendar: Icons.CalendarIcon,
  sparkles: Icons.SparklesIcon,
  photograph: Icons.PhotographIcon,
  mail: Icons.MailIcon,
};

export default function ModuleCard({ module }: ModuleCardProps) {
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const IconComponent = iconMap[module.icon] || Icons.FolderIcon;
  const favorite = isFavorite(module.id);

  return (
    <Card hover className="flex flex-col h-full relative group overflow-hidden">
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:via-blue-50/30 group-hover:to-blue-100/50 transition-all duration-300 pointer-events-none" />
      
      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(module.id);
        }}
        className={`absolute top-2 right-2 p-2 rounded-lg hover:bg-gray-100 transition-all z-10 ${
          favorite ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        title={favorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
      >
        <svg
          className={`w-5 h-5 transition-all ${
            favorite ? 'text-yellow-500 fill-yellow-500 scale-110' : 'text-gray-400'
          }`}
          fill={favorite ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </button>

      <div className="flex items-start gap-4 mb-4 relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-[#E7F3FF] via-[#D0E7FF] to-[#B8DBFF] rounded-xl flex items-center justify-center flex-shrink-0 text-[#2B7FFF] shadow-md ring-1 ring-blue-100 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
          <IconComponent />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-semibold text-gray-900">{module.title}</h3>
            {favorite && (
              <svg className="w-4 h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            )}
          </div>
          <p className="text-sm text-gray-500 line-clamp-2">{module.description}</p>
        </div>
      </div>
      <div className="mt-auto pt-3 relative z-10">
        <Button
          variant="primary"
          fullWidth
          onClick={() => router.push(module.path)}
          className="text-sm bg-gradient-to-r from-[#2B7FFF] to-[#1a6eef] hover:from-[#1a6eef] hover:to-[#0d5fd9] shadow-md hover:shadow-lg transition-all duration-300"
        >
          Modüle Git
        </Button>
      </div>
    </Card>
  );
}
