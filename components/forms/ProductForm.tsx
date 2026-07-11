import { NewProduct, Product } from "@/types/product";
import { useEffect, useState } from "react";
interface ProductFormProps {
  onSubmit: (product: NewProduct) => void;
  initialData?: Product | null;
  mode?: "add" | "edit";
}
export default function ProductForm({
  onSubmit,
  initialData,
  mode,
}: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });
  useEffect(() => {
    if (initialData) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setFormData({
        name: initialData.name,
        category: initialData.category,
        price: String(initialData.price),
        stock: String(initialData.stock),
      });
    } else {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setFormData({
        name: "",
        category: "",
        price: "",
        stock: "",
      });
    }
  }, [initialData]);
  function handleChange(field: string, value: string | number) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  }
  function validateForm() {
    const newErrors = {
      name: "",
      category: "",
      price: "",
      stock: "",
    };
    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    }
    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }
    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (Number(formData.price) <= 0) {
      newErrors.price = "Price must be a positive number";
    }
    if (!formData.stock) {
      newErrors.stock = "Stock is required";
    } else if (Number(formData.stock) < 0) {
      newErrors.stock = "Stock must be a non-negative number";
    }
    setErrors(newErrors);
    return !Object.values(newErrors).some((v) => !!v);
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    const newProduct: NewProduct = {
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      stock: Number(formData.stock),
    };
    onSubmit(newProduct);
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Product Name
        </label>

        <input
          type="text"
          placeholder="Enter product name"
          value={formData.name}
          onChange={(event) => handleChange("name", event.target.value)}
          className={`w-full text-gray-700 rounded-lg border px-3 py-2 ${errors.name ? "border-red-500" : "focus:outline-none"}`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          className={`mb-1 block text-sm font-medium text-gray-700 ${errors.category ? "text-red-500" : "focus:outline-none"}`}>
          Category
        </label>

        <input
          type="text"
          placeholder="Enter category"
          value={formData.category}
          onChange={(event) => handleChange("category", event.target.value)}
          className={`w-full text-gray-700 rounded-lg border px-3 py-2 ${errors.category ? "border-red-500" : "focus:outline-none"}`}
        />
        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            className={`mb-1 block text-sm font-medium text-gray-700 ${errors.price ? "text-red-500" : "focus:outline-none"}`}>
            {errors.price ? errors.price : "Price"}
            Price
          </label>

          <input
            type="number"
            placeholder="Enter price"
            value={formData.price}
            onChange={(event) => {
              handleChange("price", event.target.value);
            }}
            className={`w-full text-gray-700 rounded-lg border px-3 py-2 ${errors.price ? "border-red-500" : "focus:outline-none"}`}
          />
        </div>

        <div>
          <label
            className={`mb-1 block text-sm font-medium text-gray-700 ${errors.stock ? "text-red-500" : "focus:outline-none"}`}>
            {errors.stock ? errors.stock : "Stock"}
          </label>

          <input
            type="number"
            placeholder="Enter stock"
            value={formData.stock}
            onChange={(event) => handleChange("stock", event.target.value)}
            className={`w-full text-gray-700 rounded-lg border px-3 py-2 ${errors.stock ? "border-red-500" : "focus:outline-none"}`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-black py-2 text-white">
        {mode === "add" ? "Save Product" : "Update Product"}
      </button>
    </form>
  );
}
