export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}
export type NewProduct = Omit<Product, "id">;
