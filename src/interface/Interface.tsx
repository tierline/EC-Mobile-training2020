export interface Description {
  route: {
    params: {
      id: number;
      name: string;
      price: number;
      description: string;
      imagePath: string;
    };
  };
}

export interface FormData {
  email: string;
  password: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imagePath: string;
}
