/**
 * フォーム系
 */
type MemberLoginFormData = {
  email: string;
  password: string;
};

type MemberApplicateFormData = {
  email: string;
  password: string;
};

type OrderFormData = {
  lastName: string;
  firstName: string;
  email: string;
  phoneNumber: string;
  postcode: string;
  prefecture: string;
  city: string;
  block: string;
};

type RouteForOrderFormData = {
  route: {
    params: {
      lastName: string;
      firstName: string;
      email: string;
      phoneNumber: string;
      postcode: string;
      prefecture: string;
      city: string;
      block: string;
    };
  };
};

/**
 * ドメイン系
 */

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imagePath: string;
};

type RouteForProduct = {
  route: {
    params: {
      id: number;
      name: string;
      price: number;
      description: string;
      imagePath: string;
    };
  };
};

type CartItem = {
  quantity: number;
  empty: boolean;
  totalAmount: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productId: number;
};

type PropForCartItem = {
  cartItem: CartItem[];
};

type OrderHistory = {
  orderId: number;
  date: string;
};

type RouteForOrderHistory = {
  route: {
    params: {
      orderId: number;
      orderDate: string;
    };
  };
};

type OrderedItem = {
  name: string;
  price: number;
  quantity: number;
  imagePath: string;
};

type RouteForOrderId = {
  route: {
    params: {
      orderId: number;
    };
  };
};
