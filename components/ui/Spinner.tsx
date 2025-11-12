interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'white' | 'gray';
  className?: string;
}

export default function Spinner({ size = 'md', color = 'blue', className = '' }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
    xl: 'w-16 h-16 border-4',
  };

  const colorClasses = {
    blue: 'border-blue-500 border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray-500 border-t-transparent',
  };

  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin ${className}`}
      role="status"
      aria-label="Yükleniyor"
    >
      <span className="sr-only">Yükleniyor...</span>
    </div>
  );
}

// Centered Spinner (sayfa ortasında)
export function CenteredSpinner({ size = 'lg', color = 'blue' }: SpinnerProps) {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Spinner size={size} color={color} />
    </div>
  );
}

// Inline Spinner (buton içinde)
export function InlineSpinner({ size = 'sm', color = 'white' }: SpinnerProps) {
  return <Spinner size={size} color={color} className="inline-block" />;
}
