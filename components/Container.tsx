"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}
const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={twMerge(`w-full  mx-auto p-3`, className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
