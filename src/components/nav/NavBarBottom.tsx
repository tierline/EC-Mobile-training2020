import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Storage from '../../Storage';
import {Alert} from 'react-native';
const NavBarBottom = () => {
  const navigation = useNavigation();
  const logout = () => {
    Storage.setAuth(false);
    Alert.alert('ログアウトしました');
    navigation.navigate('Login');
  };
  return (
    <Footer>
      <FooterTab>
        <Button dark onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </Button>
        <Button dark onPress={() => navigation.navigate('Cart')}>
          <Text>Cart</Text>
        </Button>
        <Button dark onPress={() => navigation.navigate('MyPage')}>
          <Text>Mypage</Text>
        </Button>
        <Button dark onPress={() => logout()}>
          <Text>LogOut</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};
export default NavBarBottom;
