interface StatusCardProps {
  status: string;
  count: number;
}

export default function StatusCard({ status, count }: StatusCardProps) {
  return (
    <div className="rounded-xl border border-gray-800 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">{status}</p>

      <p className="mt-2 text-2xl font-bold text-gray-900">{count}</p>
    </div>
  );
}
