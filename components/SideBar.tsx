'use client'
import React, { useMemo } from 'react'
import { HiHome } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { ImStatsBars2 } from "react-icons/im";
import { twMerge } from 'tailwind-merge';
import Box from './Box';
import SidebarItem from './SidebarItem';


interface SideBarProps {
  children?: React.ReactNode;
  className?: string
}

const SideBar: React.FC<SideBarProps> = ({ children, className }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname === "/",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Stats",
        active: pathname === "/stats",
        href: "/stats",
        icon: ImStatsBars2,
      },
    ],
    [pathname],
  );
  return (
    <div
      className={twMerge(
        `
  md:flex
        flex-col
        gap-y-2
        h-fit
        w-[200px]
  `,
        className,
      )}
    >
      <Box>
        <div className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((route) => (
            <SidebarItem key={route.label} {...route} />
          ))}
        </div>
      </Box>
    </div>
  );
};

export default SideBar
