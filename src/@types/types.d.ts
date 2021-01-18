// TOREVIEW 似たような型が多い。フォルダ分けしたい。PropやRouteを書くべきかどうか。
// フォルダ分けの原則
// ドメイン系は個別にファイルを作成する
// フォーム系はフォームに直接書いても。

// それほど情報がなければ、そもそも必要かどうか。
// 使いまわす場合は、作っても良いかも。

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
  errorType: any[]; // TOREVIEW : 配列の中のオブジェクトの型指定
  control: any;
  name: string;
  rules: any;
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
