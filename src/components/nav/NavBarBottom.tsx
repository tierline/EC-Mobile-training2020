import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import MemberApi from '../../api/MemberApi';
const NavBarBottom = () => {
  const navigation = useNavigation();

  const logoutConfirmation = () => {
    Alert.alert('ログアウトしますか？', '', [
      {text: 'ログアウトする', onPress: () => logout()},
      {text: 'やめる', onPress: () => console.log()},
    ]);
  };
  const logout = () => {
    MemberApi.logout('/member/logout');
    Alert.alert('ログアウトしました');
    navigation.navigate('Login');
  };

  return (
    <Footer>
      <FooterTab>
        <Button dark onPress={() => navigation.navigate('Home')}>
          <Text>ホーム</Text>
        </Button>
        <Button dark onPress={() => navigation.navigate('Cart')}>
          <Text>カート</Text>
        </Button>
        <Button dark onPress={() => navigation.navigate('MyPage')}>
          <Text>購入履歴</Text>
        </Button>
        <Button dark onPress={() => logoutConfirmation()}>
          <Text>ログアウト</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};
export default NavBarBottom;
