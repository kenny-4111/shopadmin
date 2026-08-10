"use client";

import { useState } from "react";
import OrdersTable from "@/components/tables/OrdersTable";
import { initialOrders } from "@/data/orders";
import { Order } from "@/types/order";
import Modal from "@/components/ui/Modal";
import OrderDetails from "@/components/orders/OrderDetail";
import { initialCustomers } from "@/data/customers";

export default function OrdersPage() {
  const [orders] = useState<Order[]>(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const normalizedSearchTerm = searchTerm.toLowerCase();

  const ordersWithCustomer = orders.map((order) => {
    const customer = initialCustomers.find(
      (customer) => customer.id === order.customerId,
    );

    return {
      ...order,
      customer: customer ? customer.name : "Unknown",
    };
  });
  const filteredOrders = ordersWithCustomer.filter(
    (order) =>
      order.customer.toLowerCase().includes(normalizedSearchTerm) ||
      order.id.toString().includes(normalizedSearchTerm) ||
      order.status.toLowerCase().includes(normalizedSearchTerm) ||
      order.date.includes(normalizedSearchTerm),
  );

  const sortedOrders = [...filteredOrders];
  if (sortOption === "newest") {
    sortedOrders.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } else if (sortOption === "oldest") {
    sortedOrders.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
  } else if (sortOption === "highest") {
    sortedOrders.sort((a, b) => b.total - a.total);
  } else if (sortOption === "lowest") {
    sortedOrders.sort((a, b) => a.total - b.total);
  }

  const ordersPerPage = 10;
  const startIndex = (currentPage - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const paginatedOrders = sortedOrders.slice(startIndex, endIndex);
  const totalPages = Math.max(
    1,
    Math.ceil(sortedOrders.length / ordersPerPage),
  );

  function handleViewOrder(order: Order) {
    setSelectedOrder(order);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setSelectedOrder(null);
    setIsModalOpen(false);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Orders</h1>
      <div className="flex flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search customer..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="flex-1 min-w-0 rounded-lg border px-3 py-2 text-gray-300"
        />
        <select
          name="sort"
          id="sort"
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
            setCurrentPage(1);
          }}
          className="flex-1 min-w-0 rounded-lg border px-3 py-2 text-gray-500">
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="highest">Highest first</option>
          <option value="lowest">Lowest first</option>
        </select>
      </div>
      <OrdersTable orders={paginatedOrders} onView={handleViewOrder} />
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="rounded-lg border bg-gray-800 px-4 py-2 text-gray-300 hover:bg-gray-600">
            Previous
          </button>
          <p className="text-gray-500 text-center">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="rounded-lg border bg-gray-800 px-4 py-2 text-gray-300 hover:bg-gray-600">
            Next
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <OrderDetails order={selectedOrder} />
      </Modal>
    </div>
  );
}
