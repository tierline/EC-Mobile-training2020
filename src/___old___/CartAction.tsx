// import axios from 'axios';
// import Url from '../api/Url';

// export default class CartAction {
//   static mappingUrl = '/api/member/cart/';

//   static async fetch(requestUrl: string, setState: Function) {
//     const url = Url.get(this.mappingUrl + requestUrl);
//     try {
//       const cart = await axios.get(url);
//       setState(cart.data.items);
//       console.log('カート内の商品情報を取得しました' + cart.data.items);
//     } catch {
//       console.log('-----カート内の商品を取得できませんでした。-----');
//     }
//   }

//   static async add(requestUrl: string, id: number) {
//     const url = Url.get(this.mappingUrl + requestUrl + `/${id}`);
//     const res = await axios.post(url, id);
//     return res.data;
//   }

//   static async delete(requestUrl: string, id: number) {
//     const url = Url.get(this.mappingUrl + requestUrl + `/${id}`);
//     await axios.post(url, id);
//   }
// }
