import axios from 'axios'
import { UrlGenerator } from '../UrlGenerator'

export default class OrderAction {

  static mappingUrl = "/api/member/order/"

  static async save(data: any) {
    const url = UrlGenerator(this.mappingUrl, 'save')
    console.log('url:' + url)
    const res = await axios.post(url, data);
    console.log(res)
    return res.data
  };


}
