"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getuserFromToken, logout } from "@/utils/auth";

const Navbar = ({ onMenuClick, backGround }) => {
  const [open, setOpen] = useState(false);
  const user = getuserFromToken();

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-neutral-primary-soft border-b border-default ${
        backGround ? "bg-gray-200" : "bg-white"
      }`}
    >
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={onMenuClick}
              type="button"
              className="xl:hidden cursor-pointer text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium  font-medium leading-5 rounded-base text-sm p-2 focus:outline-none"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h10"
                />
              </svg>
            </button>
            <section className="flex ms-2 md:me-24 gap-x-4">
              <Image
                src="/dashboard.png"
                width={30}
                height={20}
                alt="dashboard-img"
                style={{ width: "auto", height: "auto" }}
              />
              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white hidden lg:block">
                Dashboard
              </span>
            </section>
          </div>

          <form className="md:flex items-center hidden lg:w-md xl:w-2xl mx-auto space-x-2 gap-x-6 absolute ml-26 lg:ml-55 xl:ml-74">
            <label className="sr-only">Search</label>
            <div className="relative w-full bg-white rounded-lg outline">
              {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div> */}
              <input
                type="text"
                id="voice-search"
                className="block w-full ps-2 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base  shadow-xs placeholder:text-lg font-sans focus:border-0 focus:outline-0"
                placeholder="Search "
                required
              />

              <svg
                className="w-4 h-4 absolute inset-y-3 end-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <button
              type="submit"
              className="text-white font-sans bg-blue-500 rounded-xl box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Search
            </button>
          </form>

          <div className="flex items-center">
            <div className="flex items-center ms-3 gap-x-8 ">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpen((prev) => !prev)}
                  className="flex items-center gap-x-2 rounded-lg bg-gray-100 border border-gray-300 px-4 py-1 cursor-pointer capitalize"
                >
                  {user?.role}
                  {open ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {/* Dropdown */}
                {open && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 rounded-lg border border-gray-200 bg-white shadow-lg">
                    <ul className="text-sm text-gray-700 px-2">
                      <li className="py-2 border-b-2 font-semibold">{user?.email}</li>
                      <li>
                        <button
                          onClick={() => {
                            logout();
                          }}
                          className="block w-full text-leftpy-2 hover:bg-red-500 hover:text-white cursor-pointer py-2 rounded-md text-red-600 font-semibold"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Image
                src="/plain_dash.png"
                width={30}
                height={20}
                alt="dashboard-img"
                style={{ width: "auto", height: "auto" }}
              />
              <Image
                src="/alert.png"
                width={26}
                height={20}
                alt="dashboard-img"
                style={{ width: "auto", height: "auto" }}
              />
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
              <div
                className="z-50 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
                id="dropdown-user"
              >
                <div
                  className="px-4 py-3 border-b border-default-medium"
                  role="none"
                >
                  <p className="text-sm font-medium text-heading" role="none">
                    Neil Sims
                  </p>
                  <p className="text-sm text-body truncate" role="none">
                    neil.sims@flowbite.com
                  </p>
                </div>
                <ul className="p-2 text-sm text-body font-medium" role="none">
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
