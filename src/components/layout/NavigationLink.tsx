"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

/** Enlace de navegación con estado "página actual" (aria-current). */
export default function NavigationLink({ href, children, onClick, className = "" }: NavigationLinkProps) {
  const pathname = usePathname();
  const route = href.split("#")[0] || "/";
  const isActive = !href.includes("#") && pathname === route;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${
        isActive ? "text-ink" : "text-ink-soft hover:text-ink"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
