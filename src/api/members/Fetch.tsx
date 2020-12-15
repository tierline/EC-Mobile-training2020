import axios from 'axios';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Member} from '../../interface/Member';
import Storage from '../../Storage';
import {url} from '../../settings/properties'


export const sendMember = (path:string, member: Member) => {
  const createMember = {
    email: member.email,
    password: member.password
  }
 return axios.post(path, createMember)
}

export const fetchProduct = async () => {
  const path = `${url}/api/products`;
  const response = await axios.get(path);
  return response.data;
};

export const fetchImagePath = (imagePath: string): string => {
  return `${url}/image/${imagePath}`;
};

export const createMember = (member: Member) => {
  const path = `${url}/api/members/applicate`;

  sendMember(path, member)
    .then(() => {
      Alert.alert('登録しました');
    })
    .catch(() => {
      Alert.alert('既に登録されているか、入力した値が不正です。');
    });
};
const navigation = useNavigation();

export const loginMember = (member: Member, ) => {
  const path = `${url}/api/login`;
  sendMember(path, member)
    .then((res) => {
      Storage.setAuth(res.data);
      navigation.navigate('Home')
    })
    .catch(() => {
      Alert.alert('予期せぬエラー');
    });
};
