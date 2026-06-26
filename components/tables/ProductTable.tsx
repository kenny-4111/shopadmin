import { products } from "@/data/products";
import StockBadge from "@/components/ui/StockBadge";

export default function ProductTable() {
  return (
    <div className="rounded-xl border bg-white text-gray-700 p-6 shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="pb-3">Name</th>
            <th className="pb-3">Category</th>
            <th className="pb-3">Price</th>
            <th className="pb-3">Stock</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="py-3">{product.name}</td>

              <td className="py-3">{product.category}</td>

              <td className="py-3">${product.price}</td>

              <td className="py-3">{product.stock}</td>

              <td className="py-3">
                <StockBadge stock={product.stock} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
