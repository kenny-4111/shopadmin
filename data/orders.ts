import { Order } from "@/types/dashboard";

export const orders: Order[] = [
  {
    id: "#1001",
    customer: "John Doe",
    amount: 120,
    status: "Delivered",
  },
  {
    id: "#1002",
    customer: "Sarah Smith",
    amount: 85,
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Michael Johnson",
    amount: 230,
    status: "Processing",
  },
  {
    id: "#1004",
    customer: "Jane Doe",
    amount: 75,
    status: "Cancelled",
  },
];
