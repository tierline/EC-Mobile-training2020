import {url} from '../../settings/properties';
import Member from '../../domain/Member';
import axios from 'axios';
import {Alert} from 'react-native';
import Storage from '../../Storage';
import {FormData} from '../../interface/Interface';

export const applicateMember = (
  path: string,
  form: FormData,
  navigation: any,
) => {
  const member = new Member(form.email, form.password);
  axios
    .post(url + path, member)
    .then((res) => {
      Storage.setAuth(res.data);
      navigation.navigate('Home');
    })
    .catch(() => {
      Alert.alert('予期せぬエラー,,,Applicate.tsx');
    });
};
