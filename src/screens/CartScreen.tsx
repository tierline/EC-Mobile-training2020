import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button, Body} from 'native-base';
import NavBar from '../components/nav/NavBar';
import NavBarBottom from '../components/nav/NavBarBottom';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
        <Content>
          <Text>Cart!</Text>
        </Content>
        <Content>
          <Body>
            <Button  danger onPress={() => navigation.navigate('Order')}>
              <Text>注文する</Text>
            </Button>
          </Body>
        </Content>
      <NavBarBottom />
    </Container>
  );
};

const styles = StyleSheet.create({});
export default CartScreen;
