import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Footer, FooterTab, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
const NavBarBottom = () => {
  const navigation = useNavigation();
  return (
    <Footer>
      <FooterTab>
        <Button dark onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </Button>
        <Button dark onPress={() => navigation.navigate('Cart')}>
          <Text>Cart</Text>
        </Button>

        <Button dark onPress={() => navigation.navigate('Order')}>
          <Text>Order</Text>
        </Button>
        <Button dark disabled>
          <Text>Mypage</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};
const styles = StyleSheet.create({});
export default NavBarBottom;
