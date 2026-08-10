import { OrderWithCustomer } from "@/types/order";
import StatusBadge from "../ui/StatusBadge";

interface OrderDetailsProps {
  order: OrderWithCustomer | null;
}

export default function OrderDetails({ order }: OrderDetailsProps) {
  if (!order) return null;

  return (
    <div className="space-y-6 text-gray-700 text-center">
      <h2 className="text-2xl font-bold text-gray-900">Order #{order.id}</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">Customer</p>
          <p className="font-medium">{order.customer}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Date</p>
          <p className="font-medium">{order.date}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Items</p>
          <p className="font-medium">{order.items}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Payment Method</p>
          <p className="font-medium">{order.paymentMethod}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Total</p>
          <p className="font-medium text-lg">${order.total}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Status</p>
          <div className="mt-1">
            <StatusBadge status={order.status} />
          </div>
        </div>
      </div>
    </div>
  );
}
