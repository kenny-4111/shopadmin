export interface Order {
  id: number;
  customerId: number;
  date: string;
  total: number;
  items: number;
  paymentMethod: "Card" | "Bank Transfer" | "Cash on Delivery";
  status: "Pending" | "Processing" | "Delivered" | "Cancelled";
}
