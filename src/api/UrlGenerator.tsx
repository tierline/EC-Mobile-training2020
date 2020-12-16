export default class UrlGenerator {
  static baseUrl = 'http://10.0.2.2:8085';

  static api(requestUrl: string): string {
    return this.baseUrl + requestUrl;
  }

  static image(imagePath: string): string {
    return this.baseUrl + '/image/' + imagePath
  }
}
