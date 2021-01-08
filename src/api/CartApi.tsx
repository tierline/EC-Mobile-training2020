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
   * @param mounted
   */
  static async fetchCartItems(
    request: string,
    setState: Function,
    mounted: boolean,
    setAmount?: Function,
  ) {
    try {
      const url = UrlApi.get(request);
      const results = await axios.get(url);
      if (mounted) {
        setState(results.data.items);
        if (setAmount) {
          setAmount(results.data.totalAmount);
        }
      }
    } catch (error) {
      console.log('通信エラー' + error);
      Alert.alert('通信エラー' + error);
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
    } catch (error) {
      console.log('通信エラー' + error);
      Alert.alert('通信エラー' + error);
    }
  }

  /**
   *
   * カートから商品をすべて削除する
   *
   * @param request
   * @param id
   */
  static async cartFromParticularProductsAllRemove(
    request: string,
    id: number,
  ) {
    const url = UrlApi.get(`${request}/${id}`);
    try {
      await axios.post(url);
    } catch (error) {
      console.log('通信エラー' + error);
      Alert.alert('通信エラー' + error);
    }
  }

  /**
   *
   * カート内に商品が入っているかどうか
   *
   * @param request
   */
  static async hasItem(request: string, setState: Function) {
    const url = UrlApi.get(request);

    try {
      const result = await axios.get(url);
      setState(result.data);
    } catch (error) {
      console.log('通信エラー' + error);
      Alert.alert('通信エラー' + error);
    }
  }
}
