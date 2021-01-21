import axios from 'axios';
import { Alert } from 'react-native';
import Url from './UrlApi';

export default class Api {
  // // TOREVIEW:
  // // then: 非同期通信 await: 部分的非同期通信
  // async -> then
  static get(request: string, callBack?: Function) {
    const url = Url.get(request);
    axios
      .get(url)
      .then((res) => {
        if (callBack) {
          callBack(res.data);
          return res.data;
        } else {
          return res.data;
        }
      })
      .catch((error) => {
        Alert.alert('get error:' + error);
      });
  }

  // TOREVIEW :
  static post(request: string, data?: any, callback?: Function) {
    const url = Url.get(request);

    if (callback) {
      axios
        .post(url, data)
        .then((res) => {
          callback(res.data);
        })
        .catch((error) => {
          Alert.alert('post error:' + error);
        });
    } else {
      axios.post(url).catch((error) => {
        Alert.alert('post error:' + error);
      });
    }
  }
}
