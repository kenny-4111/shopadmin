"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { initialProducts } from "@/data/products";
import StatsGrid from "@/components/dashboard/StatsGrid";
import SalesChart from "@/components/charts/SalesCharts";
import { initialOrders } from "@/data/orders";
import OrdersTable from "@/components/tables/OrdersTable";
import { initialCustomers } from "@/data/customers";
import { salesData } from "@/data/sales";
export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts) as Product[]);
    }
  }, []);
  const recentOrders = initialOrders.slice(0, 5).map((order) => {
    const customer = initialCustomers.find(
      (customer) => customer.id === order.customerId,
    );

    return {
      ...order,
      customer: customer ? customer.name : "Unknown",
    };
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold sm:text-3xl">Dashboard Overview</h1>

      <StatsGrid products={products} />

      <SalesChart data={salesData} />
      <OrdersTable
        title="Recent orders"
        orders={recentOrders}
        showActions={false}
      />
    </div>
  );
}
