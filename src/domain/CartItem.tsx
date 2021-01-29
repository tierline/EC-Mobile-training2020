export type CartItem = {
  quantity: { empty: boolean; value: number };
  empty: boolean;
  totalAmount: number;
  productImage: string;
  productPrice: number;
  productName: string;
  productId: number;
};

export type PropForCartItem = {
  cartItem: [CartItem];
};
