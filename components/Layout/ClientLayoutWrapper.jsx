"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import MainLayout from "@/components/Layout/MainLayout";
import { getuserFromToken, isAuthenticated, logout } from "@/utils/auth";
// import { useThemeStore } from "@/store/themeStore";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  // const setTheme = useThemeStore((state) => state.setTheme);

  // useEffect(() => {
  //   const saved = localStorage.getItem("theme");
  //   setTheme(saved || "light");
  // }, [setTheme]);

  const noLayoutRoutes = ["/login", "/signup"];

  const useMainLayout = !noLayoutRoutes.includes(pathname);
  useEffect(() => {
    if (useMainLayout) {
      if (!isAuthenticated()) {
        logout(); // safe now, runs only in client
        return;
      }

      const user = getuserFromToken();
      if (pathname.startsWith("/dashboard") && user?.role !== "manager") {
        router.push("/unauthorized");
      }
    }
  }, [pathname, useMainLayout, router]);

  return useMainLayout ? <MainLayout>{children}</MainLayout> : children;
}
