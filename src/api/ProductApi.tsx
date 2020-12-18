import axios from 'axios';
import {Alert} from 'react-native';
import Url from './Url';

export default class ProductApi {
  static fetchProduct(request: string, setState: Function) {
    const url = Url.get(request);
    axios
      .get(url)
      .then((res) => {
        setState(res.data);
      })
      .catch(() => {
        Alert.alert('通信エラー,get');
      });
  }
}
