import axios from 'axios';
import UrlGenerator from '../UrlGenerator';

export default class OrderAction {
  static mappingUrl = '/api/member/order/';

  static async save(data: any) {
    const url = UrlGenerator.api(this.mappingUrl + 'save');
    const res = await axios.post(url, data);
    return res.data;
  }

  static async fetch(orderId: number) {
    const url = UrlGenerator.api(this.mappingUrl + 'complete/' + orderId);
    const res = await axios.get(url);
    return res.data;
  }
}
