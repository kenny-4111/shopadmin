import { StatsCardProps } from "@/types/dashboard";

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="text-sm text-gray-500">{title}</h3>

      <p className="mt-2 text-3xl font-bold text-gray-700">{value}</p>
    </div>
  );
}
