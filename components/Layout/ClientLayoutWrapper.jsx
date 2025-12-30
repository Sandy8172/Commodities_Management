"use client";

import { usePathname } from "next/navigation";
import MainLayout from "@/components/Layout/MainLayout";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const noLayoutRoutes = ["/login", "/signup"];
  const useMainLayout = !noLayoutRoutes.includes(pathname);

  return useMainLayout ? <MainLayout>{children}</MainLayout> : children;
}