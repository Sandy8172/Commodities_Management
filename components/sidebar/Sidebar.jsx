"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Store,
  Package,
  PlusCircle,
  BarChart,
  TrendingUp,
  DollarSign,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

export const sidebarItems = [
  {
    type: "item",
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    type: "group",
    title: "Store",
    icon: Store,
    children: [
      {
        title: "Products",
        href: "/products",
        icon: Package,
      },
      {
        title: "Add Product",
        href: "/add-product",
        icon: PlusCircle,
      },
    ],
  },
  {
    type: "group",
    title: "Analytics",
    icon: BarChart,
    children: [
      {
        title: "Traffic",
        href: "/analytics/traffic",
        icon: TrendingUp,
      },
      {
        title: "Earnings",
        href: "/analytics/earnings",
        icon: DollarSign,
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, children, backGround, currentPath }) => {
  const [openItem, setOpenItem] = useState([]);

  const handleItemOpen = (value) => {
    setOpenItem((prev) => {
      const existingItem = prev.includes(value);
      if (existingItem) {
        return prev.filter((i) => i !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <>
      <aside
        className={`
    fixed top-15 left-0 z-40 w-74 h-full
    transition-transform
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    xl:translate-x-0 ${backGround ? "bg-gray-200" : "bg-white"}
  `}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default ">
          <ul className="space-y-2 font-medium ">
            {sidebarItems.map((item) => {
              if (item.type === "item") {
                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-x-4 px-2 py-3 text-body font-sans border border-gray-300 rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group bg-white rounded-lg hover:bg-gray-100 ${
                        currentPath === item.href ? "text-blue-700" : ""
                      }`}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => handleItemOpen(item.title)}
                    className={`flex items-center font-sans w-full justify-between px-2 py-3 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group rounded-lg hover:bg-gray-100 ${
                      openItem.includes(item.title)
                        ? backGround
                          ? "bg-gray-200"
                          : "text-gray-600"
                        : "bg-white border border-gray-300 "
                    }`}
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <section className="flex items-center gap-x-4 ">
                      <item.icon />
                      <span>{item.title}</span>
                    </section>
                    {openItem.includes(item.title) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  <section
                    className={`rounded-lg  ${
                      backGround ? "bg-gray-200" : "bg-white"
                    }`}
                  >
                    <ul
                      id="dropdown-example"
                      className={`py-2 space-y-2  ${
                        openItem.includes(item.title) ? "block" : "hidden"
                      }`}
                    >
                      {item.children.map((child) => (
                        <li key={child.title}>
                          <Link
                            href={child.href}
                            className={`flex items-center gap-x-4 px-2 py-3 text-md font-sans  rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group  rounded-lg pl-10 hover:bg-white ${
                              backGround ? "bg-gray-200" : "bg-white"
                            } ${
                              currentPath === child.href ? "text-blue-700" : ""
                            } `}
                          >
                            <child.icon />
                            <span className="font-normal">{child.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      <div
        className={`p-4 xl:ml-74 mt-15 min-h-screen ${
          backGround ? "bg-gray-200" : "bg-white"
        } `}
      >
        {children}
      </div>
    </>
  );
};

export default Sidebar;
