import Link from 'next/link';
import React from 'react';

interface NavigationLinkProps {
    href: string;
    children: React.ReactNode;
    isContact?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }
  
  export default function NavigationLink({ href, children, isContact, onClick }: NavigationLinkProps) {
    if (isContact) {
      return (
        <Link
          href={href}
          onClick={onClick}
          className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
        >
          {children}
        </Link>
      );
    }
  
    return (
      <Link
        href={href}
        onClick={onClick}
        className="transition-colors duration-300 relative group font-medium text-sm xl:text-base text-gray-800 hover:text-blue-600"
      >
        <span>{children}</span>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    );
  }
