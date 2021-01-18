export interface CartItem {
  quantity: number;
  empty: boolean;
  totalAmount: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productId: number;
}

export type PropForCartItem = {
  cartItem: [CartItem];
};
