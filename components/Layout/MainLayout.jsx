"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Button } from "../ui/button";
import Link from "next/link";

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathName = usePathname();
  const isBgGray = pathName === "/dashboard";

  return (
    <>
      <Navbar
        onMenuClick={() => setSidebarOpen((prev) => !prev)}
        backGround={isBgGray}
      />

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        backGround={isBgGray}
        currentPath={pathName}
      >
        <div className="flex justify-between my-8 items-center">
          <h2 className="capitalize text-3xl md:text-4xl font-sans">
            {pathName.split("/")}
          </h2>
          <Button
            asChild
            className={`capitalize bg-blue-600 font-sans font-light tracking-wider text-xs md:text-lg md:py-5 px-2 md:px-4 dark:text-white ${
              pathName === "/add-product" || pathName === "/" ? "hidden" : ""
            }`}
          >
            <Link href={"/add-product"}>+ add new product</Link>
          </Button>
        </div>

        {children}
        
      </Sidebar>
    </>
  );
};

export default MainLayout;
