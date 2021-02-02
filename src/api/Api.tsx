import axios from 'axios';
import { Alert } from 'react-native';
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
        console.log('----------error---------', error);
        Alert.alert('get error:' + error);
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
        Alert.alert('post error:' + error);
      });
  }
}
