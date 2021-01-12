import React from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import Api from '../../api/Api';
const NavBarBottom = () => {
  const navigation = useNavigation();

  const logoutConfirmation = () => {
    Alert.alert('ログアウトしますか？', '', [
      { text: 'ログアウトする', onPress: () => logout() },
      { text: 'やめる', onPress: () => console.log() },
    ]);
  };
  const logout = () => {
    Api.logout('/member/logout');
    Alert.alert('ログアウトしました');
    navigation.navigate('Login');
  };

  return (
    <Footer>
      <FooterTab>
        <Button onPress={() => navigation.navigate('Home')}>
          <Icon name="home" />
        </Button>
        <Button onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart" />
        </Button>
        <Button onPress={() => navigation.navigate('MyPage')}>
          <Icon name="person" />
        </Button>
        <Button onPress={() => logoutConfirmation()}>
          <Icon name="exit" />
        </Button>
      </FooterTab>
    </Footer>
  );
};
export default NavBarBottom;
