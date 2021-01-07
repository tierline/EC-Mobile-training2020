import axios from 'axios';
import {Alert} from 'react-native';
import {flashMessage} from '../components/flashMessage/FlashMessage';
import Storage from '../Storage';
import UrlApi from './UrlApi';

export default class MemberApi {
  static login(request: string, data: any, navi: Function) {
    const url = UrlApi.get(request);
    axios
      .post(url, data)
      .then((res) => {
        console.log('login', res.data);
        Storage.setAuth(res.data);
        if (res.data) {
          Storage.setEmail(data.email);
          navi();
        } else {
          flashMessage(
            'ログインに失敗しました',
            'メールアドレスかパスワードが違います',
            1000,
            'red',
          );
        }
      })
      .catch(() => {
        Alert.alert('エラー');
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
        } else {
          flashMessage(
            '新規登録に失敗しました',
            '既に登録されています',
            1000,
            'red',
          );
        }
      })
      .catch(() => {
        Alert.alert('エラー');
      });
  }

  static logout(request: string) {
    const url = UrlApi.get(request);
    axios.get(url).then(() => {
      Storage.setAuth(false);
    });
  }

  //住所かid
  static fetchMemberAddress(request: string, email: any, reset: Function) {
    const url = UrlApi.get(request);
    axios
      .post(url, email)
      .then((res) => {
        reset(res.data);
      })
      .catch(() => {
        console.log('fetchMemberAddress');
      });
  }
}
