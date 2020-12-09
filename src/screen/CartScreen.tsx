import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button, Icon, Body} from 'native-base';
import NavBar from '../components/NavBar';
import NavBarBottom from '../components/NavBarBottom';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <NavBar />
      <Content>
        <Content>
          <Text>Cart!</Text>
        </Content>
        <Content>
          <Body>
            <Button rounded danger onPress={() => navigation.navigate('Order')}>
              <Text>注文する</Text>
            </Button>
            <BackButton />
          </Body>
        </Content>
      </Content>
      <NavBarBottom />
    </Container>
  );
};

const styles = StyleSheet.create({});
export default CartScreen;
