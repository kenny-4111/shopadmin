import StatsGrid from "../../components/dashboard/StatsGrid";
import SalesChart from "../../components/charts/SalesCharts";
import RecentOrdersTable from "@/components/tables/RecentOrdersTable";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold sm:text-3xl">Dashboard Overview</h1>
      <StatsGrid />
      <SalesChart />
      <RecentOrdersTable />
    </div>
  );
}
