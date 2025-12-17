"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { getuserFromToken } from "@/utils/auth";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const data = getuserFromToken();
  }, []);

  return <div></div>;
}
