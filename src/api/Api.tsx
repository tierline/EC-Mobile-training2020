import axios from 'axios';
import { Alert } from 'react-native';
import Url from './UrlApi';

export default class Api {
  // // TOREVIEW:
  // // then: 非同期通信 await: 部分的非同期通信
  static async get(request: string, callBack?: Function) {
    const url = Url.get(request);
    try {
      const res = await axios.get(url);
      if (callBack) {
        callBack(res.data);
      } else {
        return res.data;
      }
    } catch (error) {
      Alert.alert('get error:' + error);
    }
  }

  // TOREVIEW :
  static async post(request: string, data?: any, callback?: Function) {
    const url = Url.get(request);
    try {
      if (callback) {
        const res = await axios.post(url, data);
        callback(res.data);
      } else {
        axios.post(url);
      }
    } catch (error) {
      Alert.alert('post error:' + error);
    }
  }
}
