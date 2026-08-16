import { initialOrders } from "@/data/orders";
import AnalyticsCard from "@/components/analytics/AnalyticsCard";
import SalesChart from "@/components/charts/SalesCharts";
import StatusCard from "@/components/analytics/StatusCard";

export default function AnalyticsPage() {
  const totalRevenue = initialOrders.reduce(
    (total, order) => total + order.total,
    0,
  );

  const totalOrders = initialOrders.length;

  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  const totalItemsSold = initialOrders.reduce(
    (total, order) => total + order.items,
    0,
  );
  const monthlySales = initialOrders.reduce(
    (monthly, order) => {
      const month = new Date(order.date).toLocaleString("en-US", {
        month: "short",
      });

      const existingMonth = monthly.find((item) => item.month === month);

      if (existingMonth) {
        existingMonth.sales += order.total;
      } else {
        monthly.push({
          month,
          sales: order.total,
        });
      }

      return monthly;
    },
    [] as { month: string; sales: number }[],
  );
  const statusCounts = initialOrders.reduce(
    (counts, order) => {
      counts[order.status]++;
      return counts;
    },
    {
      Pending: 0,
      Processing: 0,
      Delivered: 0,
      Cancelled: 0,
    },
  );
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
        <AnalyticsCard
          title="Total Revenue"
          value={`$${totalRevenue.toFixed(2)}`}
        />

        <AnalyticsCard title="Total Orders" value={totalOrders} />

        <AnalyticsCard
          title="Average Order Value"
          value={`$${averageOrderValue.toFixed(2)}`}
        />

        <AnalyticsCard title="Items Sold" value={totalItemsSold} />
      </div>
      <SalesChart data={monthlySales} />
      <div>
        <h2 className="mb-4 text-xl font-semibold">Order Status</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatusCard status="Pending" count={statusCounts.Pending} />

          <StatusCard status="Processing" count={statusCounts.Processing} />

          <StatusCard status="Delivered" count={statusCounts.Delivered} />

          <StatusCard status="Cancelled" count={statusCounts.Cancelled} />
        </div>
      </div>
    </div>
  );
}
