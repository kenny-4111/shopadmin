import { Product } from "@/types/product";
import StockBadge from "@/components/ui/StockBadge";

interface ProductTableProps {
  products: Product[];
}
export default function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white text-gray-700 p-4 shadow-sm sm:p-6">
      <table className="min-w-full text-sm sm:text-base">
        <thead>
          <tr className="border-b text-left text-xs uppercase tracking-wide text-gray-500 sm:text-sm">
            <th className="px-3 py-3">Name</th>
            <th className="px-3 py-3">Category</th>
            <th className="px-3 py-3">Price</th>
            <th className="px-3 py-3">Stock</th>
            <th className="px-3 py-3">Status</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
