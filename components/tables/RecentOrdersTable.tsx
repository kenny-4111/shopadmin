import { orders } from "@/data/orders";
import StatusBadge from "../ui/StatusBadge";

export default function RecentOrdersTable() {
  return (
    <div className="rounded-xl border border-gray-800 bg-white p-4 text-gray-700 shadow-sm sm:p-6">
      <h2 className="mb-4 text-lg font-semibold sm:text-xl">Recent Orders</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm sm:text-base">
          <thead>
            <tr className="border-b text-left text-xs uppercase tracking-wide text-gray-500 sm:text-sm">
              <th className="px-3 py-3">Order ID</th>
              <th className="px-3 py-3">Customer</th>
              <th className="px-3 py-3">Amount</th>
              <th className="px-3 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-b-0">
                <td className="px-3 py-4">{order.id}</td>
                <td className="px-3 py-4">{order.customer}</td>
                <td className="px-3 py-4">${order.amount}</td>
                <td className="px-3 py-4">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
