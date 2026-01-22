import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const variantStyles = {
  primary: 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl',
  secondary: 'bg-white text-blue-600 shadow-md border border-gray-200 hover:border-blue-600/30',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600/5',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  iconLeft,
  iconRight,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {iconLeft && <span className="w-5 h-5 mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="w-5 h-5 ml-2">{iconRight}</span>}
    </>
  );

  if (href) {
    // Si es una URL externa, usar <a> tag normal
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return (
        <a href={href} className={combinedClassName}>
          {content}
        </a>
      );
    }
    // Si es una ruta interna, usar Link de Next.js
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
