"use client";

import React, { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useDeleteProduct } from "@/hooks/useProductMutations";
import KpiCard from "@/components/ui/KpiCard";

const productName = ["name", "view", "price", "revenue"];

const Products = () => {
  const { data: products, isLoading, error } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);

  const deleteProduct = useDeleteProduct();

  const itemsPerPage = 10;

  
  if (isLoading) return <div> Loading </div>;
  if (error) return <div> Something went wrong </div>;

  // Pagination logic
  const totalItems = products?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex items-start gap-x-10 flex-wrap md:flex-nowrap">
      <div className="w-[70%]">
        <div className="relative w-full dark:border dark:bg-zinc-900 rounded-xl p-4 h-fit overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-gray-600 border-b border-t dark:text-gray-400 border-gray-300 dark:border-gray-500 text-lg">
              <tr>
                {/* <th scope="col" className="px-4 py-3 font-light font-sans"></th> */}
                <th
                  scope="col"
                  colSpan={2}
                  className="px-4 py-3 font-light font-sans pl-10"
                >
                  Product Name
                </th>
                <th scope="col" className="px-4 py-3 font-light font-sans">
                  View
                </th>
                <th scope="col" className="px-4 py-3 font-light font-sans">
                  Pricing
                </th>
                <th scope="col" className="px-4 py-3 font-light font-sans">
                  Revenue
                </th>
                <th scope="col" className="px-4 py-3 font-light font-sans">
                  Manage
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems?.map((p) => (
                <tr
                  key={p.id} // always add a key when mapping
                  className="border-b border-default"
                >
                  <td className="pl-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value={p.id}
                      className="w-5 h-5 border border-default-medium rounded-xs bg-neutral-secondary-medium"
                    />
                  </td>
                  {productName.map((head) => (
                    <td
                      key={head}
                      scope="row"
                      className={`px-4 py-4 ${
                        head === "name" ? "font-semibold" : ""
                      }`}
                    >
                      {head === "price" || head === "revenue" ? "$" : ""}
                      {p?.[head]}
                    </td>
                  ))}
                  <td className="px-4 py-4 flex items-center gap-x-4 text-xs text-gray-500">
                    <button className="hover:bg-blue-300 dark:hover:bg-blue-500 rounded-xs p-1 dark:text-gray-400 hover:text-white dark:hover:text-white cursor-pointer dark:border border-gray-500 dark:px-2">
                      Edit
                    </button>
                    <button
                      className="hover:bg-red-300 dark:hover:bg-red-500 dark:text-gray-400 rounded-xs p-1 hover:text-white dark:hover:text-white cursor-pointer dark:border border-gray-500 dark:px-2"
                      onClick={() => {
                        deleteProduct.mutate(p.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-body mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-heading">
              {startIndex + 1}-{Math.min(startIndex + itemsPerPage, totalItems)}
            </span>{" "}
            of <span className="font-semibold text-heading">{totalItems}</span>
          </span>

          <ul className="flex -space-x-px text-sm">
            <li>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-9 focus:outline-none disabled:opacity-50"
              >
                Previous
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`flex items-center justify-center text-sm w-9 h-9 focus:outline-none border border-default-medium cursor-pointer ${
                    currentPage === page
                      ? "text-blue-600 font-semibold text-xl"
                      : "text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium"
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}

            <li>
              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-9 focus:outline-none disabled:opacity-50"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-[30%]">
        <KpiCard title={"Total Earning"} value={"+12100"} />
      </div>
    </div>
  );
};

export default Products;
