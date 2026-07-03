import { NewProduct } from "@/types/product";
import { useState } from "react";
interface ProductFormProps {
  onAddProduct: (product: NewProduct) => void;
}
export default function ProductForm({ onAddProduct }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });
  function handleChange(field: string, value: string | number) {
    setFormData({
      ...formData,
      [field]: value,
    });
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newProduct: NewProduct = {
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      stock: Number(formData.stock),
    };
    onAddProduct(newProduct);
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
          className="w-full text-gray-700 rounded-lg border px-3 py-2"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Category
        </label>

        <input
          type="text"
          placeholder="Enter category"
          value={formData.category}
          onChange={(event) => handleChange("category", event.target.value)}
          className="w-full text-gray-700 rounded-lg border px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Price
          </label>

          <input
            type="number"
            placeholder="Enter price"
            value={formData.price}
            onChange={(event) => {
              console.log(event.target.value);
              handleChange("price", event.target.value);
            }}
            className="w-full text-gray-700 rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Stock
          </label>

          <input
            type="number"
            placeholder="Enter stock"
            value={formData.stock}
            onChange={(event) => handleChange("stock", event.target.value)}
            className="w-full text-gray-700 rounded-lg border px-3 py-2"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-black py-2 text-white">
        Save Product
      </button>
    </form>
  );
}
