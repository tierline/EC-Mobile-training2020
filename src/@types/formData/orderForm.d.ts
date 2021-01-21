/**
 *
 * 注文フォームの型定義
 *
 */

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
