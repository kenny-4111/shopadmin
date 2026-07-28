"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { initialProducts } from "@/data/products";
import StatsGrid from "@/components/dashboard/StatsGrid";
import SalesChart from "@/components/charts/SalesCharts";
import RecentOrdersTable from "@/components/tables/RecentOrdersTable";

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold sm:text-3xl">Dashboard Overview</h1>

      <StatsGrid products={products} />

      <SalesChart />
      <RecentOrdersTable />
    </div>
  );
}
