import React from 'react';
import {Container, Content, Text, Button, Body} from 'native-base';
import NavBarBottom from '../components/nav/NavBarBottom';
import {useNavigation} from '@react-navigation/native';
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

export default CartScreen;
