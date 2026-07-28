import { Order } from "@/types/order";
import StatusBadge from "../ui/StatusBadge";

interface OrdersTableProps {
  orders: Order[];
  title?: string;
  onView?: (order: Order) => void;
  showActions?: boolean;
}

export default function OrdersTable({
  orders,
  title = "Orders",
  onView,
  showActions = true,
}: OrdersTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white p-4 text-gray-700 shadow-sm sm:p-6">
      <h2 className="mb-4 text-lg font-semibold sm:text-xl">{title}</h2>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  #{order.id}
                </p>
                <p className="text-xs text-gray-500">{order.customer}</p>
              </div>

              <StatusBadge status={order.status} />
            </div>

            <div className="mt-3 space-y-1 text-sm text-gray-600">
              <p>Date: {order.date}</p>
              <p>Items: {order.items}</p>
              <p>Total: ${order.total}</p>
            </div>

            {showActions && (
              <button
                onClick={() => onView?.(order)}
                className="mt-4 w-full rounded-lg bg-black py-2 text-white hover:bg-gray-800">
                View
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <table className="hidden min-w-full text-sm md:table">
        <thead>
          <tr className="border-b text-left text-xs uppercase tracking-wide text-gray-500">
            <th className="px-3 py-3">Order ID</th>
            <th className="px-3 py-3">Customer</th>
            <th className="px-3 py-3">Date</th>
            <th className="px-3 py-3">Items</th>
            <th className="px-3 py-3">Total</th>
            <th className="px-3 py-3">Status</th>
            {showActions && <th className="px-3 py-3">Actions</th>}
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b last:border-b-0">
              <td className="px-3 py-4">#{order.id}</td>
              <td className="px-3 py-4">{order.customer}</td>
              <td className="px-3 py-4">{order.date}</td>
              <td className="px-3 py-4">{order.items}</td>
              <td className="px-3 py-4">${order.total}</td>
              <td className="px-3 py-4">
                <StatusBadge status={order.status} />
              </td>
              {showActions && (
                <td className="px-3 py-4">
                  <button
                    onClick={() => onView?.(order)}
                    className="rounded-lg bg-black px-3 py-1 text-white hover:bg-gray-800">
                    View
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
