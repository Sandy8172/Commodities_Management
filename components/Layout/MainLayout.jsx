"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Button } from "../ui/button";

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
      >
        <div className="flex justify-between my-8 items-center">
          <h2 className="capitalize text-4xl font-sans">
            {pathName.split("/")}
          </h2>
          <Button
            className={`capitalize bg-blue-600 font-sans font-light tracking-wider text-lg py-5 ${
              pathName === "/add-product" ? "hidden" : ""
            }`}
          >
            + add new product
          </Button>
        </div>

        {children}
      </Sidebar>
    </>
  );
};

export default MainLayout;
