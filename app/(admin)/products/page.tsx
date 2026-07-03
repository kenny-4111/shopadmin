"use client";

import ProductTable from "@/components/tables/ProductTable";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { initialProducts } from "@/data/products";
import ProductForm from "@/components/forms/ProductForm";
import { NewProduct } from "@/types/product";

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  function handleAddProduct(newProduct: NewProduct) {
    const productWithId = {
      ...newProduct,
      id: products.length + 1,
    };

    setProducts((prevProducts) => [...prevProducts, productWithId]);

    setIsModalOpen(false);
  }
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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

        <ProductForm onAddProduct={handleAddProduct} />
      </Modal>
    </div>
  );
}
