import axios from 'axios';
import {Alert} from 'react-native';
import Storage from '../Storage';
import UrlApi from './UrlApi';

export default class MemberApi {
  static login(request: string, data: any, nav: Function) {
    const url = UrlApi.get(request);
    axios
      .post(url, data)
      .then((res) => {
        Storage.setAuth(res.data);
        if (res.data) {
          Storage.setEmail(data.email);
          nav();
        }
      })
      .catch(() => {
        Alert.alert('メールアドレスかパスワードが違います');
      });
  }

  static applicate(request: string, data: any, nav: Function) {
    const url = UrlApi.get(request);
    axios
      .post(url, data)
      .then((res) => {
        Storage.setAuth(res.data);
        if (res.data) {
          Storage.setEmail(data.email);
          nav();
        }
      })
      .catch(() => {
        Alert.alert('既に登録されています');
      });
  }

  //住所かid
  static addressAcquisition(request: string, email: any, reset: Function) {
    const url = UrlApi.get(request);
    axios
      .post(url, email)
      .then((res) => {
        reset(res.data);
      })
      .catch(() => {
        console.log('addressAcquisition');
      });
  }
}
