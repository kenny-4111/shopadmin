"use client";

import ProductTable from "@/components/tables/ProductTable";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { initialProducts } from "@/data/products";

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-lg bg-black px-4 py-2 text-white">
          Add Product
        </button>
      </div>

      <ProductTable products={products} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="mb-4 text-xl text-gray-700 font-semibold">
          Add Product
        </h2>

        <p className="text-gray-600">Product form coming next...</p>
      </Modal>
    </div>
  );
}
