export interface Order {
  id: number;
  customer: string;
  date: string;
  total: number;
  items: number;
  paymentMethod: "Card" | "Bank Transfer" | "Cash on Delivery";
  status: "Pending" | "Processing" | "Delivered" | "Cancelled";
}
