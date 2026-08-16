interface AnalyticsCardProps {
  title: string;
  value: string | number;
}

export default function AnalyticsCard({ title, value }: AnalyticsCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
