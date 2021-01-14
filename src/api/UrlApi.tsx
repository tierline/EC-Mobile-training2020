import { Platform } from 'react-native';

export default class Url {
  static get(request: string): string {
    if (__DEV__) {
      return this.baseUrl() + request;
    } else {
      return 'https://training-tierline.cf' + request;
    }
  }

  static baseUrl() {
    const android = 'http://10.0.2.2:8080';
    const ios = 'http://127.0.0.1:8080';
    if (Platform.OS === 'ios') {
      return ios;
    } else {
      return android;
    }
  }
  static image(imagePath: string): string {
    return this.baseUrl() + '/image/' + imagePath;
  }
}
