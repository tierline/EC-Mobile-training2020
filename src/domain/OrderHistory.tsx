export interface OrderHistory {
  orderId: number;
  orderDate: string;
}

export type RouteForOrderHistory = {
  route: {
    params: OrderHistory;
  };
};
