import axios from 'axios';
import {Alert} from 'react-native';
import Storage from '../Storage';
import Url from './Url';

export default class Api {
  static post(request: string, data: any, navi: Function) {
    const url = Url.get(request);
    axios
      .post(url, data)
      .then((res) => {
        Storage.setAuth(res.data);
        if (res.data) {
          Storage.setEmail(data.email);
          navi();
        } else {
          Alert.alert('メールアドレスかパスワードが違います');
        }
      })
      .catch(() => {
        Alert.alert('既に登録されています');
      });
  }

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

  static fetchCart(request: string, setState: Function) {
    const url = Url.get(request);
    axios
      .get(url)
      .then((res) => {
        setState(res.data.items);
      })
      .catch(() => {
        console.log('-----カート内の商品を取得できませんでした。-----');
      });
  }

  static addProductToCart(request: string, id: number) {
    const url = Url.get(`${request}/${id}`);
    axios.post(url, id).catch(() => {
      Alert.alert('通信エラー,,add');
    });
  }

  static removeProductFromCart(request: string, id: number) {
    const url = Url.get(`${request}/${id}`);
    axios
      .post(url)
      .then(() => {
        Alert.alert('削除しました');
      })
      .catch(() => {
        Alert.alert('通信エラー,,remove');
      });
  }

  static saveOrderDetail(request: string, data: any, nav: any) {
    const url = Url.get(request);
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

  static fetchOrderDetails(
    request: string,
    orderId: number,
    setState: Function,
  ) {
    const url = Url.get(request + '/' + orderId);
    axios
      .get(url)
      .then((res) => {
        setState(res.data);
      })
      .catch(() => {
        Alert.alert('通信エラー,,fetchOrder');
      });
  }

  static fetchOrderHistory(request: string, email: object, setState: Function) {
    const url = Url.get(request);
    axios
      .post(url, email)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch(() => {
        Alert.alert('通信エラー,,fetchOrderHistory');
      });
  }
}