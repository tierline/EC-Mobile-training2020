import axios from 'axios';
import {Alert} from 'react-native';
import Storage from '../Storage';
import Url from './Url';

export default class Api {
  static post(request: string, data: object, navi: Function) {
    const url = Url.get(request);
    axios
      .post(url, data)
      .then((res) => {
        Storage.setAuth(res.data);
        if (res.data) {
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
    axios
      .post(url, id)
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
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

  static saveOrderDetail(request: string) {
    const url = Url.get(request);
    axios
      .post(url)
      .then(() => {
        console.log('OK');
      })
      .catch(() => {
        Alert.alert('通信エラー,,saveOder');
      });
  }
}
