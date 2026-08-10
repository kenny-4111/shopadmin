import { CustomerWithStats } from "@/types/customer";

interface CustomersTableProps {
  customers: CustomerWithStats[];
  title?: string;
}

export default function CustomersTable({
  customers,
  title = "Customers",
}: CustomersTableProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">{title}</h2>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden ">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="rounded-2xl border border-gray-800 bg-gray-50 p-4 shadow-sm text-center">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {customer.name}
              </p>
              <p className="text-xs text-gray-500">{customer.email}</p>
            </div>

            <div className="mt-3 space-y-1 text-sm text-gray-600">
              <p>Phone: {customer.phone}</p>
              <p>Joined: {customer.joinedAt}</p>
              <p>Orders: {customer.orderCount}</p>
              <p>Total Spent: ${customer.totalSpent.toFixed(2)}</p>
              <p>
                Last Order:{" "}
                {customer.lastOrder ? `${customer.lastOrder.date}` : "-"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <table className="hidden min-w-full text-sm md:table">
        <thead>
          <tr className="border-b text-left text-xs uppercase tracking-wide text-gray-800">
            <th className="px-3 py-3">Name</th>
            <th className="px-3 py-3">Email</th>
            <th className="px-3 py-3">Phone</th>
            <th className="px-3 py-3">Joined At</th>
            <th className="px-3 py-3">Orders</th>
            <th className="px-3 py-3">Total Spent</th>
            <th className="px-3 py-3">Last Order</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b last:border-b-0 text-gray-600">
              <td className="px-3 py-4">{customer.name}</td>
              <td className="px-3 py-4">{customer.email}</td>
              <td className="px-3 py-4">{customer.phone}</td>
              <td className="px-3 py-4">{customer.joinedAt}</td>
              <td className="px-3 py-4">{customer.orderCount}</td>
              <td className="px-3 py-4">${customer.totalSpent.toFixed(2)}</td>
              <td className="px-3 py-4">
                {customer.lastOrder ? `${customer.lastOrder.date}` : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
