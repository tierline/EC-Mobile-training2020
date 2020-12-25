import axios from 'axios';
import {Alert} from 'react-native';
import UrlApi from './UrlApi';

export default class OrderApi {
  /**
   *
   * 注文詳細を保存する
   *
   * @param request リクエスト先のURL
   * @param data 注文詳細情報
   * @param nav 保存後に注文完了ページに遷移させるためのナヴィゲーション
   */
  static saveOrderDetail(request: string, data: any, nav: any) {
    const url = UrlApi.get(request);
    axios
      .post(url, data)
      .then((res) => {
        nav.navigate('Complete', {
          orderId: res.data,
        });
      })
      .catch(() => {
        Alert.alert('通信エラー,,saveOrder');
      });
  }

  /**
   *
   * 注文詳細を取得する
   *
   * @param request リクエスト先のURL
   * @param id 注文ID
   * @param setState
   */
  static async fetchOrderDetails(
    request: string,
    orderId: number,
    setState: Function,
    isMounted: boolean,
  ) {
    const url = UrlApi.get(request + '/' + orderId);
    try {
      const result = await axios.get(url);
      if (isMounted) {
        setState(result.data);
      }
    } catch (error) {
      console.log('通信エラー' + error);
      Alert.alert('通信エラー' + error);
    }
  }

  static fetchMemberId(request: string, email: object, setState: Function) {
    const url = UrlApi.get(request);
    axios
      .post(url, email)
      .then((res) => {
        console.log('memberId', res.data);
        setState(res.data);
      })
      .catch(() => {
        Alert.alert('通信エラー,,fetchMemberId');
      });
  }

  static fetchOrder(request: string, id: number, setState: Function) {
    const url = UrlApi.get(`${request}/${id}`);
    axios.get(url).then((res) => {
      console.log('orderDate', res.data);
      setState(res.data);
    });
  }
}
