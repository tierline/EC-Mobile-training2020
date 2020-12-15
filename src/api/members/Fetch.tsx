import axios from 'axios';
import {Alert} from 'react-native';
import Member from '../../domain/Member';
import Storage from '../../Storage';
import {url} from '../../settings/properties';

export const sendMember = (path: string, application: any) => {
  const applicateMember = new Member(application.email, application.password);
  return axios.post(path, applicateMember);
};

export const fetchProduct = async () => {
  const path = `${url}/api/common/products`;
  const response = await axios.get(path);
  return response.data;
};

export const generateImagePath = (imagePath: string): string => {
  return `${url}/image/${imagePath}`;
};

export const createMember = (member: Member) => {
  const path = `${url}/api/auth/applicate`;

  sendMember(path, member)
    .then(() => {
      Alert.alert('登録しました');
    })
    .catch(() => {
      Alert.alert('既に登録されているか、入力した値が不正です。');
    });
};

export const loginMember = (member: Member) => {
  const path = `${url}/api/auth/login`;
  sendMember(path, member)
    .then((res) => {
      Storage.setAuth(res.data);
    })
    .catch(() => {
      Alert.alert('予期せぬエラー');
    });
};
