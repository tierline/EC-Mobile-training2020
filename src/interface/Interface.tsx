import { useNavigation } from "@react-navigation/native";

export interface Description {
  route: {
    params: {
      name:string,
      price : number,
      description: string,
      imagePath: string
    }
  }
}

export interface FormData {
  email: string,
  password: string
}
