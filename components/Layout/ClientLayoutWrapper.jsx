"use client";

import { usePathname, useRouter } from "next/navigation";
import MainLayout from "@/components/Layout/MainLayout";
import { getuserFromToken, isAuthenticated, logout } from "@/utils/auth";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const noLayoutRoutes = ["/login", "/signup"];

  const useMainLayout = !noLayoutRoutes.includes(pathname);
  if (useMainLayout) {
    if (!isAuthenticated()) {
      logout();
      return;
    }

    const user = getuserFromToken();
    if (pathname.startsWith("/dashboard") && user?.role !== "manager") {
      router.push("/unauthorized");
      return null;
    }
  }

  return useMainLayout ? <MainLayout>{children}</MainLayout> : children;
}
