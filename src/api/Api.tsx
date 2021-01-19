import axios from 'axios';
import { Alert } from 'react-native';
import Storage from '../Storage';
import Url from './UrlApi';

export default class Api {
  static logout(request: string) {
    const url = Url.get(request);
    axios.get(url).then(() => {
      Storage.setAuth(false);
    });
  }

  // // TOREVIEW: 素直に分けるべき？
  // // then: 非同期通信 await: 部分的非同期通信
  static async get(request: string, callBack: Function) {
    const url = Url.get(request);
    try {
      const res = await axios.get(url);
      callBack(res.data);
    } catch (error) {
      Alert.alert('get error:' + error);
    }
  }

  // TOREVIEW : なんか違う、、、
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
