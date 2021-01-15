// TOREVIEW 似たような型が多い。フォルダ分けしたい。PropやRouteを書くべきかどうか。

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

type PropForOrderFormData = {
  orderFormData: {
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

type RouteForOrderFormData = {
  route: {
    params: {
      orderFormData: {
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
  cartItem: [
    {
      quantity: number;
      empty: boolean;
      totalAmount: number;
      productName: string;
      productPrice: number;
      productImage: string;
      productId: number;
    },
  ];
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

type PropForDailyOrder = {
  navi: any;
  orderHistory: {
    orderId: number;
    date: string;
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
    params: number;
  };
};

/**
 * コンポーネント系
 */

type PropForSimpleInput = {
  label: string;
  errors: any;
  errorMessage: string;
  control: any;
  name: string;
  // rules: { required: boolean; pattern: RegExp };
  rules: any; // rules は場合によって変更がある。　minLength, maxLength等
  secureTextEntry: boolean;
  defaultValue: string;
  placeholder: string;
};

type PropForAuthForm = {
  apiUrl: string;
  message: string;
  buttonText1: string;
  buttonText2: string;
  navDestination: string;
};

type PropForButton = {
  text: string;
  onPress: function;
};

type PropForIconButton = {
  text: string;
  onPress: function;
  iconName: string;
};
