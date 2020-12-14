import axios from 'axios';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Member} from '../interface/Member';
import {sendMember} from '../modules/Axios';
import Storage from './Storage';

const url = 'http://10.0.2.2:8085';

export const fetchProduct = async () => {
  const path = `${url}/api/products`;
  const response = await axios.get(path);
  return response.data;
};

export const fetchImagePath = (imagePath: string): string => {
  return `${url}/image/${imagePath}`;
};

export const createMember = (member: Member) => {
  const path = `${url}/api/create`;

  sendMember(path, member)
    .then(() => {
      Alert.alert('登録しました');
    })
    .catch(() => {
      Alert.alert('既に登録されているか、入力した値が不正です。');
    });
};

export const loginMember = (member: Member) => {
  const path = `${url}/api/login`;
  sendMember(path, member)
    .then((res) => {
      Storage.setAuth(res.data);
    })
    .catch(() => {
      Alert.alert('予期せぬエラー');
    });
};
