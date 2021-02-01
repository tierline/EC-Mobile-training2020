/**
 * 注文履歴
 */
export type OrderHistory = {
  orderId: number;
  date: string;
};

export type RouteForOrderHistory = {
  route: {
    params: {
      orderId: number;
      date: string;
    };
  };
};
