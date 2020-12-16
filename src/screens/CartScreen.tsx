import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, ScrollView, Image } from 'react-native';
import { Container, Content, Text, Button, Icon, Body, Card, CardItem, Left } from 'native-base';
import NavBar from '../components/nav/NavBar';
import NavBarBottom from '../components/nav/NavBarBottom';
import { useNavigation } from '@react-navigation/native';
import { getCart } from '../api/member/cart/getCart';
import { generateImagePath } from '../api/member/Fetch';
import CartItemList from '../components/list/CartItemList';

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <Body>
          <CartItemList />
          <Button primary onPress={() => navigation.navigate('OrderForm')}>
            <Text>注文する</Text>
          </Button>
        </Body>
      </Content>
      <NavBarBottom />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  }

});
export default CartScreen;
