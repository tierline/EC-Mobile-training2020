import {Platform} from 'react-native';

const android = 'http://10.0.2.2:8085';
const ios = 'http://192.168.1.16:8085';

export const baseUrl = () => {
  if (Platform.OS === 'ios') {
    console.log('ios');
    return ios;
  } else {
    console.log('android');
    return android;
  }
};
