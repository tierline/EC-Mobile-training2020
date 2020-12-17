import axios from 'axios';
import Url from '../Url';

export default class OrderAction {
  static mappingUrl = '/api/member/order/';

  static async save(data: any) {
    const url = Url.get(this.mappingUrl + 'save');
    const res = await axios.post(url, data);
    // nav.navigate('Complete', {
    //   orderId: res.data,
    // });

    return res.data;
  }

  static async fetch(orderId: number) {
    const url = Url.get(this.mappingUrl + 'complete/' + orderId);
    const res = await axios.get(url);
    return res.data;
  }
}
