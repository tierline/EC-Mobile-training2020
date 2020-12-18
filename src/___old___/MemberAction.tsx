import Member from '../domain/Member';
// import axios from 'axios';
// import Storage from '../../Storage';
// import {Alert} from 'react-native';
import UrlApi from '../api/UrlApi';
import MemberApi from '../api/MemberApi';
export default class MemberAction {
  static baseRequest: string = '/api/member';

  static async applicate(member: Member, navi: any, request: string) {
    const postUrl = UrlApi.get(this.baseRequest + request);
    MemberApi.post(postUrl, member, navi);
    // const url = UrlGenerator.api(this.baseRequest + request);
    // try {
    //   const res = await axios.post(url, member);
    //   Storage.setAuth(res.data);
    //   navi();
    // } catch {
    //   Alert.alert('既に登録されています。,,,MemberAction.applicate.tsx');
    // }
  }
}
