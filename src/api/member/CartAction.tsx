import axios from 'axios';
import UrlGenerator from '../UrlGenerator';

export default class CartAction {
  static mappingUrl = '/api/member/cart/';

  static async fetch(requestUrl: string) {
    const url = UrlGenerator.api(this.mappingUrl + requestUrl);
    const res = await axios.get(url);
    return res.data;
  }

  static async add(requestUrl: string, id: number) {
    const url = UrlGenerator.api(this.mappingUrl + requestUrl + `/${id}`);
    const res = await axios.post(url, id);
    return res.data;
  }

  static async delete(requestUrl: string, id: number) {
    const url = UrlGenerator.api(this.mappingUrl + requestUrl + `/${id}`);
    await axios.post(url, id);
  }
}
