"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const activo = pathname === href;

  return (
    <li className="relative group cursor-pointer transition-colors">
      <Link
        href={href}
        className={`${activo ? "text-black" : "text-gray-400 hover:text-black"} transition-colors`}
      >
        {children}
      </Link>
      <div
        className={`absolute -bottom-1 left-0 h-[0.125rem] bg-black transition-all duration-300 ${activo ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </li>
  );
};
