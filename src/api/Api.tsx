import axios from 'axios';
import { Alert } from 'react-native';
import { flashMessage } from '../components/flashMessage/FlashMessage';
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
    } catch (error) {
      Alert.alert('auth error:' + error);
    }
  }

  static logout(request: string) {
    const url = Url.get(request);
    axios.get(url).then(() => {
      Storage.setAuth(false);
    });
  }

  //素直に分けるべき？
  static async get(
    request: string,
    setState: Function,
    mounted?: boolean,
    setAmount?: Function,
  ) {
    const url = Url.get(request);
    try {
      const res = await axios.get(url);
      if (mounted) {
        setState(res.data.items);
        if (setAmount) {
          setAmount(res.data.totalAmount);
        }
        return;
      }
      setState(res.data);
    } catch (error) {
      Alert.alert('get error:' + error);
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
    } catch (error) {
      Alert.alert('post error:' + error);
    }
  }
}
