import axios from 'axios';
import { Alert } from 'react-native';
import { flashMessage } from '../components/flashMessage/FlashMessage';
import Storage from '../Storage';
import Url from './UrlApi';

export default class Api {
  static async auth(
    request: string,
    data: any,
    navi: Function,
    message: string,
  ) {
    const url = Url.get(request);
    try {
      const res = await axios.post(url, data);
      Storage.setAuth(res.data);
      if (res.data) {
        Storage.setEmail(data.email);
        navi();
      } else {
        this.authCheck(message);
      }
    } catch (error) {
      Alert.alert('auth error:' + error);
    }
  }
  // TOREVIEW : こんなやり方でいいのか？書く場所、、、
  // check?
  // java のプロパティファイル的なメッセージファイル。
  // @types的な。
  // validationMessage, カート追加メッセージ、カート削除メッセージ で 共通化できる
  static authCheck(message: string) {
    if (message === 'login') {
      flashMessage(
        'ログインに失敗しました。',
        'メールアドレス、パスワードを確認してください。',
        3000,
        'red',
      );
    } else {
      flashMessage(
        '新規登録に失敗しました。',
        '既に登録されています。',
        3000,
        'red',
      );
    }
  }

  static logout(request: string) {
    const url = Url.get(request);
    axios.get(url).then(() => {
      Storage.setAuth(false);
    });
  }

  static async wait() {
    return new Promise((resolve) => {
      setTimeout(function () {
        console.log('WAIT FUNC');
        resolve('waitから返した RESOLVE');
      }, 5000);
    });
    // console.log('setTimeout外 実行されるか？');
  }

  static async asyncGet() {
    try {
      const waitResult = await Api.wait();
      console.log(waitResult);
    } catch (error) {
      Alert.alert('get error:' + error);
    }
    console.log('asyncGet last done');
  }

  static thenGet() {
    Api.wait()
      .then((waitResult) => {
        console.log(waitResult);
      })
      .catch((error) => {
        Alert.alert('get error:' + error);
      });
    console.log('thenGet last done');
  }

  // //TOREVIEW : 素直に分けるべき？
  // // clean up は
  static async get(
    request: string,
    setState: Function,
    mounted?: boolean,
    setAmount?: Function,
  ) {
    const url = Url.get(request);
    try {
      // await は書き換える。
      // await でも非同期通信が可能ではある。
      // then で繋ぐ場合は非同期通信でやってくれる。
      const res = await axios.get(url);
      // remove mounted
      if (mounted) {
        setState(res.data.items); // callBackFun(res.data) // setState以外の用途用
        // remove setAmount
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
      Alert.alert('post error!!!:' + error + '\n' + request);
    }
  }
}
