import axios from 'axios';
import {Alert} from 'react-native';
import UrlApi from './UrlApi';

export default class CartApi {
  /**
   * カートの商品を取得する
   *
   * @param request
   * @param setState
   */
  static fetchCart(request: string, setState: Function) {
    const url = UrlApi.get(request);
    axios
      .get(url)
      .then((res) => {
        setState(res.data.items);
      })
      .catch(() => {
        console.log('-----カート内の商品を取得できませんでした。-----');
      });
  }

  /**
   *
   * カートに商品を追加する
   *
   * @param request
   * @param id
   */
  static addProductToCart(request: string, id: number) {
    const url = UrlApi.get(`${request}/${id}`);
    axios.post(url, id).catch(() => {
      Alert.alert('通信エラー,,add');
    });
  }

  /**
   *
   * カートから商品をすべて削除する
   *
   * @param request
   * @param id
   */
  static removeProductFromCart(request: string, id: number) {
    const url = UrlApi.get(`${request}/${id}`);
    axios
      .post(url)
      .then(() => {
        Alert.alert('削除しました');
      })
      .catch(() => {
        Alert.alert('通信エラー,,remove');
      });
  }
}
