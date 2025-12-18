"use client";

import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        {children}
      </Sidebar>
    </>
  );
};

export default MainLayout;
