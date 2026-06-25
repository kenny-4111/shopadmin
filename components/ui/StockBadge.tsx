interface StockBadgeProps {
  stock: number;
}

export default function StockBadge({ stock }: StockBadgeProps) {
  let label = "";
  let styles = "";

  if (stock > 20) {
    label = "In Stock";
    styles = "bg-green-100 text-green-800";
  } else if (stock > 0) {
    label = "Low Stock";
    styles = "bg-yellow-100 text-yellow-800";
  } else {
    label = "Out of Stock";
    styles = "bg-red-100 text-red-800";
  }

  return (
    <span className={`rounded-full px-3 py-1 text-sm ${styles}`}>{label}</span>
  );
}
