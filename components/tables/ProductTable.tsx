import { Product } from "@/types/product";
import StockBadge from "@/components/ui/StockBadge";

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete?: (product: Product) => void;
}
export default function ProductTable({
  products,
  onEdit,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white text-gray-700 p-4 shadow-sm sm:p-6">
      <div className="space-y-4 sm:hidden">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {product.name}
                </p>
                <p className="text-xs text-gray-500">{product.category}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">
                  ${product.price}
                </p>
                <p className="text-xs text-gray-500">Stock: {product.stock}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-700">
              <StockBadge stock={product.stock} />
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <button
                onClick={() => onEdit(product)}
                className="flex-1 rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-600 sm:flex-none">
                Edit
              </button>
              <button
                onClick={() => onDelete?.(product)}
                className="flex-1 rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600 sm:flex-none">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <table className="min-w-full text-sm sm:text-base hidden sm:table">
        <thead>
          <tr className="border-b text-left text-xs uppercase tracking-wide text-gray-500 sm:text-sm">
            <th className="px-3 py-3">Name</th>
            <th className="px-3 py-3">Category</th>
            <th className="px-3 py-3">Price</th>
            <th className="px-3 py-3">Stock</th>
            <th className="px-3 py-3">Status</th>
            <th className="px-3 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b last:border-b-0">
              <td className="px-3 py-4">{product.name}</td>
              <td className="px-3 py-4">{product.category}</td>
              <td className="px-3 py-4">${product.price}</td>
              <td className="px-3 py-4">{product.stock}</td>
              <td className="px-3 py-4">
                <StockBadge stock={product.stock} />
              </td>
              <td className="px-3 py-4">
                <button
                  onClick={() => onEdit(product)}
                  className="rounded-lg bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
                  Edit
                </button>
                <button
                  onClick={() => onDelete?.(product)}
                  className="ml-2 rounded-lg bg-red-500 px-3 py-1 text-white hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
