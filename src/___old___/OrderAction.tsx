import axios from 'axios';
import UrlApi from '../api/UrlApi';

export default class OrderAction {
  static mappingUrl = '/api/member/order/';

  // const foo = (res) => {
  //   console.log(res);

  // }

  // static async save(data, callback) {
  //   API.post(this.mappingUrl, data, foo);
  static async save() {
    const url = UrlApi.get(this.mappingUrl + 'save');
    const res = await axios.post(url);
    console.log(res);
    return res.data;
  }
}
