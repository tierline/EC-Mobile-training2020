import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Footer, FooterTab, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Storage from '../../Storage';
const NavBarBottom = () => {
  const navigation = useNavigation();
  const logout = () => {
    Storage.setAuth(false);
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
const styles = StyleSheet.create({});
export default NavBarBottom;
