import { url } from '../settings/properties'
export default class UrlGenerator {
  static baseUrl = url();

  static api(requestUrl: string): string {
    return this.baseUrl + requestUrl;
  }

  static image(imagePath: string): string {
    return this.baseUrl + '/image/' + imagePath;
  }
}

// export const UrlGenerator = (mappingUrl: string, requestUrl: string) => {
//   return `http://${ip}:8085` + mappingUrl + requestUrl
// }
