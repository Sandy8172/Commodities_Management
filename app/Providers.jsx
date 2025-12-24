"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const querryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={querryClient}>
      { children }
    </QueryClientProvider>
  );
};

export default Providers;
