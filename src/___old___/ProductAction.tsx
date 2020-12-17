// import axios from 'axios';
// import {Alert} from 'react-native';
import Api from '../api/Api';
import Url from '../api/Url';

export default class ProductAction {
  static baseRequest = '/api/product';

  static async fetch(state: Function) {
    const url = Url.get(this.baseRequest);
    Api.getProduct(url, state);
    // try {
    //   const res = await axios.get(url);
    //   return res.data;
    // } catch {
    //   Alert.alert('通信エラー,,,ProductAction.tsx');
    // }
  }
}
