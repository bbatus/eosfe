'use client';

import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className="p-4 md:p-6 min-h-full bg-gradient-to-br from-[#F5F7FA] via-[#F0F2F5] to-[#E8EAED]">
      <div className={`bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-7 transition-shadow hover:shadow-lg ${className}`}>
        {children}
      </div>
    </div>
  );
}
