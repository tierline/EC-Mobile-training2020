// import axios from 'axios';
// import {Alert} from 'react-native';
import MemberApi from '../api/MemberApi';
import UrlApi from '../api/UrlApi';

export default class ProductAction {
  static baseRequest = '/api/product';

  static async fetch(state: Function) {
    const url = UrlApi.get(this.baseRequest);
    MemberApi.getProduct(url, state);
    // try {
    //   const res = await axios.get(url);
    //   return res.data;
    // } catch {
    //   Alert.alert('通信エラー,,,ProductAction.tsx');
    // }
  }
}
