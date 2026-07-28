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

  const [isModalOpen, setIsModalOpen] = useState(false);

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

      <OrdersTable orders={orders} onView={handleViewOrder} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <OrderDetails order={selectedOrder} />
      </Modal>
    </div>
  );
}
