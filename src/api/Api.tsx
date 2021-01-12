import axios from 'axios';
import {Alert} from 'react-native';
import {flashMessage} from '../components/flashMessage/FlashMessage';
import Storage from '../Storage';
import Url from './UrlApi';

export default class Api {
  static async auth(request: string, data: any, navi: Function) {
    const url = Url.get(request);
    try {
      const res = await axios.post(url, data);
      Storage.setAuth(res.data);
      if (res.data) {
        Storage.setEmail(data.email);
        navi();
      } else {
        flashMessage('失敗', '', 1000, 'red');
      }
    } catch {
      Alert.alert('error:auth');
    }
  }

  static logout(request: string) {
    const url = Url.get(request);
    axios.get(url).then(() => {
      Storage.setAuth(false);
    });
  }

  static async get(request: string, setState: Function, mounted?: boolean) {
    const url = Url.get(request);
    try {
      const res = await axios.get(url);
      setState(res.data);
    } catch {
      Alert.alert('error: get');
    }
  }

  //なんか違う、、、
  static async post(request: string, data?: any, callback?: Function) {
    const url = Url.get(request);
    try {
      if (callback) {
        const res = await axios.post(url, data);
        callback(res.data);
      } else {
        axios.post(url);
      }
    } catch {
      Alert.alert('error: post');
    }
  }
}
