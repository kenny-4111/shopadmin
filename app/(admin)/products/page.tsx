"use client";

import { useState } from "react";
import ProductTable from "@/components/tables/ProductTable";
import ProductForm from "@/components/forms/ProductForm";
import Modal from "@/components/ui/Modal";
import { initialProducts } from "@/data/products";
import { Product, NewProduct } from "@/types/product";

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const mode = selectedProduct ? "edit" : "add";

  function handleSubmit(newProduct: NewProduct) {
    if (!selectedProduct) {
      const newId =
        products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
      const productToAdd: Product = { id: newId, ...newProduct };
      setProducts([...products, productToAdd]);
    } else {
      const updatedProducts = products.map((product) =>
        product.id === selectedProduct.id ?
          { ...product, ...newProduct }
        : product,
      );
      setProducts(updatedProducts);
    }
    handleCloseModal();
  }

  function handleEditProduct(product: Product) {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }
  function handleOpenModal() {
    setSelectedProduct(null);
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setSelectedProduct(null);
    setIsModalOpen(false);
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Products</h1>

        <button
          onClick={handleOpenModal}
          className="rounded-lg bg-black px-4 py-2 text-white">
          Add product
        </button>
      </div>

      <ProductTable products={products} onEdit={handleEditProduct} />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="mb-4 text-xl text-gray-700 font-semibold">
          {mode === "add" ? "Add Product" : "Edit Product"}
        </h2>

        <ProductForm
          mode={mode}
          onSubmit={handleSubmit}
          initialData={selectedProduct}
        />
      </Modal>
    </div>
  );
}
