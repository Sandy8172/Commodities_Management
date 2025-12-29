"use client";
import React from "react";
import { useDashboard } from "@/hooks/useDashboard";
import KpiCard from "@/components/ui/KpiCard";
import RecentSales from "@/components/RecentSales";
import OverviewChart from "@/components/OverviewChart";

const DashboardPage = () => {
  const { data, isLoading, error } = useDashboard();

  if (isLoading) return <div>Loading dashboard...</div>;
  if (error) return <div>Something went wrong</div>;

  const { kpis, overview, recentSales } = data;

  return (
    <section className="space-y-6 ">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 dark:text-white ">
        <KpiCard title="Total Earning" value={`$ ${kpis.totalEarnings}`} />
        <KpiCard title="Views" value={`+ ${kpis.views}`} />
        <KpiCard title="Total Sales" value={`+ ${kpis.totalSales}`} />
        <KpiCard title="Subscriptions" value={`+ ${kpis.subscriptions}`} />
      </div>

      {/* Overview + Recent Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <OverviewChart data={overview} />
        <RecentSales data={recentSales} />
      </div>
    </section>
  );
};

export default DashboardPage;
