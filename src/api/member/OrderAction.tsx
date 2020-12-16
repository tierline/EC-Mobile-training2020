import axios from 'axios'
import UrlGenerator from '../UrlGenerator'

export default class OrderAction {

  static mappingUrl = "/api/member/order/"

  static async save(data: any) {
    const url = UrlGenerator.api(this.mappingUrl + '/save')
    const res = await axios.post(url, data);
    console.log(res)
    return res.data
  };


}
