import axios from 'axios';
import {Alert} from 'react-native';
import UrlGenerator from './UrlGenerator';

export default class ProductAction {
  static baseRequest = '/api/product';

  static async fetch() {
    const url = UrlGenerator.api(this.baseRequest);
    try {
      const res = await axios.get(url);
      return res.data;
    } catch {
      Alert.alert('通信エラー,,,ProductAction.tsx');
    }
  }
}
