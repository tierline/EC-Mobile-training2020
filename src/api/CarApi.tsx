import axios from 'axios';
import {Alert} from 'react-native';
import UrlApi from './UrlApi';

export default class CartApi {
  /**
   *
   * カートの商品を取得する
   *
   * @param request
   * @param setState
   * @param unmounted
   */
  static async fetchCart(
    request: string,
    setState: Function,
    unmounted: boolean,
  ) {
    try {
      const url = UrlApi.get(request);
      const results = await axios.get(url);
      if (!unmounted) {
        setState(results.data.items);
      }
      return () => {
        unmounted = true;
      };
    } catch (error) {
      const {status, statusText} = error.response;
      console.log(`Error! HTTP Status: ${status} ${statusText}`);
    }
  }

  /**
   *
   * カートに商品を追加する
   *
   * @param request
   * @param id
   */
  static async addProductToCart(request: string, id: number) {
    const url = UrlApi.get(`${request}/${id}`);
    try {
      await axios.post(url, id);
    } catch (err) {
      Alert.alert('通信エラー' + err);
    }
  }

  /**
   *
   * カートから商品をすべて削除する
   *
   * @param request
   * @param id
   */
  static async removeProductFromCart(request: string, id: number) {
    const url = UrlApi.get(`${request}/${id}`);
    try {
      await axios.post(url);
      Alert.alert('削除しました');
    } catch (err) {
      Alert.alert('通信エラー' + err);
    }
  }

  /**
   *
   * カート内
   *
   * @param request
   */
  static hasItem(request: string, setState: Function) {
    const url = UrlApi.get(request);
    axios
      .get(url)
      .then(async (res) => {
        await setState(res.data);
      })
      .catch(() => {
        Alert.alert('通信エラー,,hasItem');
      });
  }
}
