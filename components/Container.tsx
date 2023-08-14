"use client";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full  mx-auto p-3">{children}</div>;
};

export default Container;
