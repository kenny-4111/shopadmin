import StatsCard from "./StatsCard";
import { Product } from "@/types/product";

interface StatsGridProps {
  products: Product[];
}

export default function StatsGrid({ products }: StatsGridProps) {
  const inventoryValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0,
  );
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Revenue"
        value={`$${inventoryValue.toLocaleString()}`}
        change="Live"
      />
      <StatsCard title="Orders" value="1,245" change="+5.2%" />
      <StatsCard title="Customers" value="842" change="+1.8%" />
      <StatsCard
        title="Products"
        value={String(products.length)}
        change="current"
      />
    </div>
  );
}
