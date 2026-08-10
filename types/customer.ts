import { Order } from "./order";

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  joinedAt: string;
}

export interface CustomerWithStats extends Customer {
  orderCount: number;
  totalSpent: number;
  lastOrder: Order | null;
}
