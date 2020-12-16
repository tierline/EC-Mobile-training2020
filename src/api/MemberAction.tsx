import Member from '../domain/Member';
import axios from 'axios';
import Storage from '../Storage';
import urlConvertor from './UrlGenerator';
import {Alert} from 'react-native';
export default class MemberAction {
  static baseRequest: string = '/api/member';

  static async applicate(member: Member, navi: any, request: string) {
    const url = urlConvertor.api(this.baseRequest + request);
    try {
      const res = await axios.post(url, member);
      Storage.setAuth(res.data);
      navi();
    } catch {
      Alert.alert('予期せぬエラー,,,Applicate.tsx');
    }
  }
}
