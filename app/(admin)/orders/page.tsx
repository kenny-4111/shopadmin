"use client";

import { useState } from "react";
import OrdersTable from "@/components/tables/OrdersTable";
import { initialOrders } from "@/data/orders";
import { Order } from "@/types/order";
import Modal from "@/components/ui/Modal";
import OrderDetails from "@/components/orders/OrderDetail";

export default function OrdersPage() {
  const [orders] = useState<Order[]>(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()),
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
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search customer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-gray-300 md:w-80"
        />
      </div>
      <OrdersTable orders={filteredOrders} onView={handleViewOrder} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <OrderDetails order={selectedOrder} />
      </Modal>
    </div>
  );
}
