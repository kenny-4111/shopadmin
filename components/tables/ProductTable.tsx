import { products } from "@/data/products";
import StockBadge from "@/components/ui/StockBadge";

export default function ProductTable() {
  return (
    <div className="rounded-xl border bg-white text-gray-700 p-6 shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className=" px-4 py-3">Name</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Stock</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="px-4 py-3">{product.name}</td>

              <td className="px-4 py-3">{product.category}</td>

              <td className="px-4 py-3">${product.price}</td>

              <td className="px-4 py-3">{product.stock}</td>

              <td className="px-4 py-3">
                <StockBadge stock={product.stock} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
