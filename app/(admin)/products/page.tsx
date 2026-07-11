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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
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
  function handleDeleteProduct(productId: number) {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId),
    );
  }
  function handleOpenDeleteModal(product: Product) {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  }
  function handleCloseDeleteModal() {
    setSelectedProduct(null);
    setIsDeleteModalOpen(false);
  }

  function handleConfirmDelete() {
    if (!selectedProduct) return;
    handleDeleteProduct(selectedProduct.id);
    handleCloseDeleteModal();
  }

  const search = searchTerm.toLowerCase();
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search);
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // category filter
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "stock-low":
        return a.stock - b.stock;
      case "stock-high":
        return b.stock - a.stock;
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Products</h1>

      <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3 sm:flex-row sm:items-center sm:gap-3 md:w-auto min-w-0">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-lg border px-3 py-2 text-white sm:w-auto w-full min-w-0 max-w-full text-gray-700 "
          />
          <div className="w-full min-w-0 max-w-full sm:w-auto">
            <select
              aria-label="Filter products by category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full md:w-48 rounded-lg border px-3 py-2 text-gray-500 appearance-none">
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full min-w-0 max-w-full sm:w-auto">
            <select
              aria-label="Sort products"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full md:w-48 rounded-lg border px-3 py-2 text-gray-500 appearance-none">
              <option value="default">default</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="stock-low">Stock (Low to High)</option>
              <option value="stock-high">Stock (High to Low)</option>
            </select>
          </div>

          <button
            onClick={handleOpenModal}
            className="w-full sm:w-auto rounded-lg bg-black px-4 py-2 text-white">
            Add product
          </button>
        </div>
      </div>

      <ProductTable
        products={sortedProducts}
        onEdit={handleEditProduct}
        onDelete={handleOpenDeleteModal}
      />

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
      {/* Delete confirmation modal*/}
      <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
        <h2 className="text-gray-900">Delete Product</h2>

        <p className="mt-4 text-gray-700">
          Are you sure you want to delete
          <strong> {selectedProduct?.name}</strong>?
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={handleCloseDeleteModal}
            className="rounded-lg border text-gray-900 px-4 py-2">
            Cancel
          </button>
          <button
            onClick={handleConfirmDelete}
            className="rounded-lg bg-red-600 px-4 py-2 text-white">
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
}
