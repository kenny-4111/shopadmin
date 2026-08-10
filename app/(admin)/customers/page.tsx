"use client";
import { useState } from "react";
import CustomersTable from "@/components/tables/CustomersTable";
import { initialCustomers } from "@/data/customers";
import { initialOrders } from "@/data/orders";

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearchTerm = searchTerm.toLowerCase();
  const filteredCustomers = initialCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(normalizedSearchTerm) ||
      customer.email.toLowerCase().includes(normalizedSearchTerm) ||
      customer.phone.includes(searchTerm),
  );

  const sortedCustomers = [...filteredCustomers].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const customersWithStats = sortedCustomers.map((customer) => {
    const customerOrders = initialOrders.filter(
      (order) => order.customerId === customer.id,
    );

    const totalSpent = customerOrders.reduce(
      (total, order) => total + order.total,
      0,
    );

    const lastOrder =
      customerOrders.length > 0 ?
        customerOrders.reduce((current, order) => {
          const latestDate = new Date(current.date);
          const orderDate = new Date(order.date);
          return orderDate > latestDate ? order : current;
        }, customerOrders[0])
      : null;

    return {
      ...customer,
      orderCount: customerOrders.length,
      totalSpent,
      lastOrder,
    };
  });

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold mb-4">Customers</h1>
      <input
        type="text"
        id="searchCustomers"
        placeholder="Search customers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg px-3 py-2"
      />
      <CustomersTable customers={customersWithStats} />
    </div>
  );
}
