export interface StatsCardProps {
  title: string;
  value: string | number;
  change: string | number;
}

export interface SalesData {
  month: string;
  sales: number;
}

export interface Order {
  id: string;
  customer: string;
  amount: number;
  status: "Pending" | "Processing" | "Delivered" | "Cancelled";
}
