"use client";
import { Toaster } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      position="top-right"
      {...props}
    />
  );
};

export { Toaster };
