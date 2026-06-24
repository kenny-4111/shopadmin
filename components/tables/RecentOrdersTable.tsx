import { orders } from "@/data/orders";
import StatusBadge from "../ui/StatusBadge";

export default function RecentOrdersTable() {
  return (
    <div className="rounded-xl border border-gray-800 bg-white p-4 text-gray-700 shadow-sm sm:p-6">
      <h2 className="mb-4 text-lg font-semibold sm:text-xl">Recent Orders</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-3 pr-3">Order ID</th>
              <th className="pb-3 pr-3">Customer</th>
              <th className="pb-3 pr-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-3 pr-3">{order.id}</td>
                <td className="py-3 pr-3">{order.customer}</td>
                <td className="py-3 pr-3">${order.amount}</td>
                <td className="py-3">
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
