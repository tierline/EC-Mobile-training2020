export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imagePath: string;
}

export type RouteForProduct = {
  route: {
    params: Product;
  };
};