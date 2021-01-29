/**
 * カート内の商品
 */
export type CartItem = {
  quantity: number;
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
