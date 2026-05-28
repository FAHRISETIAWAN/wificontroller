"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext =
  createContext<ThemeContextType>({
    darkMode: false,
    toggleTheme: () => {},
  });

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  // INIT
  useEffect(() => {
    const savedTheme =
      sessionStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);

      document.documentElement.classList.add(
        "dark"
      );
    } else {
      setDarkMode(false);

      document.documentElement.classList.remove(
        "dark"
      );
    }

    setMounted(true);
  }, []);

  // UPDATE
  useEffect(() => {
    if (!mounted) return;

    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );

      sessionStorage.setItem(
        "theme",
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );

      sessionStorage.setItem(
        "theme",
        "light"
      );
    }
  }, [darkMode, mounted]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  if (!mounted) return null;

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () =>
  useContext(ThemeContext);