interface StatusBadgeProps {
  status: "Pending" | "Processing" | "Delivered" | "Cancelled";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    Delivered: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Processing: "bg-blue-100 text-blue-800",
    Cancelled: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}
