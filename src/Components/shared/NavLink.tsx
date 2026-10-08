"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface NavLinksProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${pathname === href ? "bg-[#244D3F] text-base-100" : ""} text-[16px] text-[#64748B] font-semibold`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
