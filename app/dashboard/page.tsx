import StatsGrid from "../../components/dashboard/StatsGrid";
import SalesChart from "../../components/charts/SalesCharts";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <StatsGrid />
      <SalesChart />
    </div>
  );
}
