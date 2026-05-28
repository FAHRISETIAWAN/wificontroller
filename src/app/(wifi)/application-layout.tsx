"use client";

import React, { ReactNode } from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";

interface ComponentProps {
  children: ReactNode;
}

const ApplicationLayout: React.FC<
  ComponentProps
> = ({ children }) => {
  return (
    <ThemeProvider>
      <div
        className="
          min-h-screen
          bg-white
          text-black
          transition-colors
          duration-500
          dark:bg-black
          dark:text-white
        "
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export { ApplicationLayout };