"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkVariant = "default" | "cta";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: NavLinkVariant;
}

export const NavLink = ({
  href,
  children,
  variant = "default",
}: NavLinkProps) => {
  const pathname = usePathname();
  const activo = pathname === href;

  if (variant === "cta") {
    return (
      <li
        className={`rounded-full transition-all text-[0.65rem] md:text-[0.85rem] ${
          activo ? "bg-gray-800" : "bg-black hover:bg-gray-800"
        }`}
      >
        <Link
          href={href}
          className="inline-block text-white px-[1rem] py-[0.5rem] md:px-[1.5rem] md:py-[0.7rem]"
        >
          {children}
        </Link>
      </li>
    );
  }

  return (
    <li className="relative group transition-colors">
      <Link
        href={href}
        className={`${activo ? "text-black" : "text-gray-400 hover:text-black"} transition-colors`}
      >
        {children}
      </Link>
      <div
        aria-hidden="true"
        className={`absolute -bottom-1 left-0 h-[0.125rem] bg-black transition-all duration-300 ${activo ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </li>
  );
};
