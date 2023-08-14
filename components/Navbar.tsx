"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import { twMerge } from "tailwind-merge";

interface NavbarProps {
  className?: string;
  onSearchQueryChange: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ className, onSearchQueryChange }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearchQueryChange(query);
  };

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
      <input
        className="h-10 rounded-xl p-3 outline-none"
        placeholder="Search Players"
        onChange={handleSearchChange}
      />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
