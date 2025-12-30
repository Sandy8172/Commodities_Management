"use client";
import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/themeStore";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      onClick={toggleTheme}
      className="hover:bg-gray-300 bg-white  text-gray-800 dark:bg-gray-800 dark:text-white text-xs md:text-balance px-2 md:px-4"
    >
      {mounted ? (theme === "dark" ? "🌙 Dark" : "☀️ Light") : null}
    </Button>
  );
}
