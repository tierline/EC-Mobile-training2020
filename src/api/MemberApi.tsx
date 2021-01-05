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

  static fetchMemberAddress(request: string, id: number, reset: Function) {
    const url = UrlApi.get(`${request}/${id}`);
    axios
      .get(url)
      .then((res) => {
        const d = res.data;
        reset({
          lastName: d.lastName,
          firstName: d.firstName,
          email: d.email,
          phoneNumber: d.phoneNumber,
          postcode: d.postcode,
          prefecture: d.prefecture,
          city: d.city,
          block: d.block,
        });
      })
      .catch(() => {
        console.log('memberAddress');
      });
  }

  static fetchMemberId(request: string, email: object, callback: Function) {
    const url = UrlApi.get(request);
    axios
      .post(url, email)
      .then((res) => {
        console.log('memberId', res.data);
        callback(res.data);
      })
      .catch(() => {
        Alert.alert('通信エラー,,fetchMemberId');
      });
  }
}
