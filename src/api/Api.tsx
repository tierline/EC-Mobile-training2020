import axios from 'axios';
import { Alert } from 'react-native';
import Storage from '../Storage';
import Url from './UrlApi';

export default class Api {
  /**
   * 新規登録、ログイン
   * @param request URL
   * @param callBack
   */
  static authentication(
    request: string,
    data: URLSearchParams,
    callback: Function,
    errorMessage: Function,
  ) {
    const url = Url.get(request);
    axios
      .post(url, data)
      .then((res) => {
        if (res.status === 200) {
          callback(res.status);
        }
      })
      .catch(() => {
        errorMessage();
      });
  }
  /**
   * サーバーにGETリクエストを送信する。
   *
   * @param request URL
   * @param callBack コールバック関数
   */
  static get(request: string, callBack?: Function) {
    const url = Url.get(request);
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        if (callBack) {
          callBack(res.data);
        }
        return res.data;
      })
      .catch((error) => {
        this.errorHandler(error);
      });
  }

  /**
   * サーバにPOSTリクエストを送信する。
   *
   * @param request URL
   * @param data リクエストボディ
   * @param callback コールバック関数
   */
  static async post(
    request: string,
    data?: any,
    callback?: Function,
  ): Promise<void> {
    const url = Url.get(request);
    axios
      .post(url, data)
      .then((res) => {
        if (callback) {
          callback(res.data);
        }
      })
      .catch((error) => {
        this.errorHandler(error);
      });
  }
  /**
   * エラー時の処理
   * @param error
   */
  //ステータスコードをみて修正する
  static errorHandler(error: any) {
    if (error.response.status === 401) {
      console.log('----------error---------', error);
      Alert.alert('セッションが切れました。もう一度最初からお試しください。');
    } else {
      console.log('----------error---------', error);
      Alert.alert('予期せぬエラー。もう一度最初からお試しください。');
    }
    Storage.navi().navigate('Login');
  }
}
