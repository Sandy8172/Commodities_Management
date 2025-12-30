"use client";

import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { useCreateProduct } from "@/hooks/useProductMutations";

const Page = () => {
  const formRef = useRef(null);

  const createProduct = useCreateProduct(() => {
    alert("Product added successfully!");
    if (formRef.current) {
      formRef.current.reset();
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    const value = {
      name: data.productName,
      price: data.price,
      view: 20,
      revenue: 150,
    };

    createProduct.mutate(value);
  };

  return (
    <div className="lg:px-10 py-5">
      {/* product form's navbar */}
      <nav className="flex justify-between items-center dark:bg-zinc-900 dark:p-10 rounded-3xl ">
        <h3 className="text-xl md:text-2xl font-semibold font-sans">
          Add New Product
        </h3>
        <section className="flex items-center flex-wrap gap-y-4 justify-center">
          <Button
            variant="outline"
            className="mr-2 text-red-500 border-red-400 font-normal font-sans tracking-wider"
            type="reset"
          >
            Discard Changes
          </Button>
          <Button
            className="font-normal font-sans tracking-wider bg-blue-600 dark:text-gray-200 dark:hover:text-gray-800"
            type="submit"
            form="product-form"
          >
            Save
          </Button>
        </section>
      </nav>

      <section className="mt-15">
        {/* product form starts here----------- */}

        <form
          ref={formRef}
          id="product-form"
          className="flex items-start justify-between flex-wrap"
          onSubmit={handleSubmit}
        >
          <div className="md:w-[60%]">
            <div className="dark:bg-zinc-900 dark:px-10 dark:py-10 dark:rounded-3xl dark:text-gray-300">
              <p className="text-lg font-medium">General Information</p>
              {/* Product Name */}
              <div className="mt-8">
                <label
                  htmlFor="productName"
                  className="block mb-2.5 text-gray-500 font-medium text-heading font-sans dark:text-gray-300"
                >
                  Product Name
                </label>
                <input
                  id="productName"
                  name="productName"
                  type="text"
                  className="bg-gray-100 border text-heading dark:bg-transparent text-sm rounded-base focus:ring-brand block w-full px-3 py-3 shadow-xs placeholder:text-gray-400 placeholder:font-sans rounded-lg"
                  placeholder="Product Name"
                  required
                />
              </div>

              {/* Product Category */}
              <div className="mt-8">
                <label className="block mb-2.5 text-gray-500 font-medium text-heading font-sans dark:text-gray-300">
                  Product Category
                </label>
                <select
                  name="productCategory"
                  className="bg-gray-100 border text-heading text-sm dark:bg-transparent text-gray-400 font-sans rounded-base focus:ring-brand block w-full px-3 py-3 shadow-xs rounded-lg"
                  defaultValue="default"
                >
                  <option value="default">Product Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="beauty">Beauty</option>
                  <option value="toys">Toys</option>
                  <option value="fashion">Fashion</option>
                  <option value="books">Books & Stationery</option>
                  <option value="sports">Sports & Outdoors</option>
                </select>
              </div>

              {/* Description */}
              <div className="mt-8">
                <label
                  htmlFor="description"
                  className="block mb-2.5 text-gray-500 font-medium text-heading font-sans dark:text-gray-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="bg-gray-100 dark:bg-transparent rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-gray-400"
                  placeholder="Description"
                ></textarea>
              </div>

              {/* Tag Keywords */}
              <div className="mt-8">
                <label
                  htmlFor="tags"
                  className="block mb-2.5 text-gray-500 font-medium text-heading font-sans dark:text-gray-300"
                >
                  Tag Keywords
                </label>
                <textarea
                  id="tags"
                  name="tags"
                  rows="4"
                  className="bg-gray-100 dark:bg-transparent rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-gray-400"
                  placeholder="Tag Keyword"
                ></textarea>
              </div>
            </div>

            <div className="dark:bg-zinc-900 dark:px-10 dark:rounded-3xl dark:text-gray-300 mt-5 dark:py-10">
              {/* Pricing */}
              <p className="font-sans text-xl">Pricing</p>
              <div className="mt-8">
                <label
                  htmlFor="price"
                  className="block mb-2.5 text-gray-500 font-medium text-heading font-sans dark:text-gray-300"
                >
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  className="bg-gray-100 dark:bg-transparent border text-heading text-sm rounded-base focus:ring-brand block w-full px-3 py-3 shadow-xs placeholder:text-gray-400 placeholder:font-sans rounded-lg"
                  placeholder="Price"
                  required
                />
              </div>

              {/* Discount + Category */}
              <section className="flex justify-between items-center mt-8 gap-x-10 flex-wrap">
                <div className="md:flex-1">
                  <label
                    htmlFor="discount"
                    className="block mb-2.5 text-gray-500 font-medium text-heading font-sans dark:text-gray-300"
                  >
                    Discount
                  </label>
                  <input
                    id="discount"
                    name="discount"
                    type="text"
                    className="bg-gray-100 border dark:bg-transparent text-heading text-sm rounded-base focus:ring-brand block w-full px-3 py-3 shadow-xs placeholder:text-gray-400 placeholder:font-sans rounded-lg"
                    placeholder="Discount"
                    required
                  />
                </div>
                <div className="md:flex-1 mt-8 md:mt-0">
                  <label className="block mb-2.5 text-gray-500 font-medium text-heading font-sans dark:text-gray-300">
                    Discount Category
                  </label>
                  <select
                    name="discountCategory"
                    className="bg-gray-100 border text-heading dark:bg-transparent text-sm text-gray-400 font-sans rounded-base focus:ring-brand block w-full px-3 py-3 shadow-xs rounded-lg"
                    defaultValue="default"
                  >
                    <option value="default">Discount Category</option>
                    <option value="seasonal">Seasonal Sale</option>
                    <option value="clearance">Clearance</option>
                    <option value="flash">Flash Deal</option>
                    <option value="bogo">Buy One Get One</option>
                  </select>
                </div>
              </section>
            </div>
          </div>

          {/* Right side (images) */}
          <div className="w-full md:w-[35%] flex flex-col gap-y-20 dark:bg-zinc-900 dark:px-10 py-10 dark:rounded-3xl dark:text-gray-300 mt-5 md:mt-0">
            <div className="w-full">
              <p className="text-xl font-medium">
                Preview Product <br />
                <span className="block mb-4 capitalize text-gray-500 font-medium text-lg font-sans">
                  Drag and drop your image here
                </span>
              </p>
              <label
                htmlFor="previewImage"
                className="flex flex-col items-center justify-center w-full dark:bg-zinc-900 dark:border-gray-600 h-64 bg-gray-100 rounded-xl border-dotted border-2 border-gray-300 rounded-base cursor-pointer hover:bg-neutral-tertiary-medium"
              >
                <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-400 dark:text-white"
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
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                    />
                  </svg>

                  <p className="mb-2 font-sans text-lg text-gray-400">
                    Drag and drop here
                  </p>
                </div>
                <input
                  id="previewImage"
                  name="previewImage"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>

            <div className="w-full">
              <p className="text-xl font-medium">
                Thumbnail Product <br />
                <span className="block mb-4 capitalize text-gray-500 font-medium text-lg font-sans">
                  Drag and drop your image here
                </span>
              </p>
              <label
                htmlFor="thumbnailImage"
                className="flex flex-col items-center dark:bg-zinc-900 dark:border-gray-600 justify-center w-full h-64 bg-gray-100 rounded-xl border-dotted border-2 border-gray-300 rounded-base cursor-pointer hover:bg-neutral-tertiary-medium"
              >
                <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-400 dark:text-white"
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
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                    />
                  </svg>

                  <p className="mb-2 font-sans text-lg text-gray-400">
                    Drag and drop here
                  </p>
                </div>
                <input
                  id="thumbnailImage"
                  name="thumbnailImage"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Page;
