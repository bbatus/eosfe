import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ children, className = '', hover = false, padding = 'md' }: CardProps) {
  const hoverClass = hover
    ? 'hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer'
    : '';
  
  const paddingClass = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }[padding];
  
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-sm ${paddingClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
