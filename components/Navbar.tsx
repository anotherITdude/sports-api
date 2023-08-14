"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { twMerge } from "tailwind-merge";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        `
      w-full h-20
    flex justify-between items-center`,
        className,
      )}
    >
      <p
        className="text-xl font-bold text-neutral-500
      border-l-[1px] border-neutral-400
      pl-1
      "
      >
        Dashboard
      </p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
