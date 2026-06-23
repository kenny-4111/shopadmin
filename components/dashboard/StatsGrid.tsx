import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard title="Revenue" value="$45,231" change="+2.5%" />

      <StatsCard title="Orders" value="1,245" change="+5.2%" />

      <StatsCard title="Customers" value="842" change="+1.8%" />

      <StatsCard title="Products" value="315" change="+0.9%" />
    </div>
  );
}
