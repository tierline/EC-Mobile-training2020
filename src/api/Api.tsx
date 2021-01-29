import axios from 'axios';
import { Alert } from 'react-native';
import Url from './UrlApi';

export default class Api {
  // // TOREVIEW:
  // // async/await から then に。
  // authメソッドを共通化
  static get(request: string, callBack?: Function) {
    const url = Url.get(request);
    axios
      .get(url)
      .then((res) => {
        if (callBack) {
          callBack(res.data);
        }
        return res.data;
      })
      .catch((error) => {
        Alert.alert('get error:' + error);
      });
  }

  // cartItemList で await を使用しているので、async関数にした。
  static async post(
    request: string,
    data?: any,
    callback?: Function,
  ): Promise<void> {
    const url = Url.get(request);
    axios
      .post(url, data)
      .then((res) => {
        console.log('res', res);
        if (callback) {
          callback(res.data);
        }
      })
      .catch((error) => {
        Alert.alert('post error:' + error);
      });
  }
}
