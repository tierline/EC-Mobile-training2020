import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Container, Content, Text, Body, Row} from 'native-base';
import NavBar from '../components/NavBar';
import NavBarBottom from '../components/NavBarBottom';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';

const OrderScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <NavBar />
      <Content>
        <Text>OrderScreen</Text>
      </Content>
      <Content>
        <Body>
          <Button
            rounded
            danger
            onPress={() => navigation.navigate('OrderForm')}>
            <Text>住所入力に進む</Text>
          </Button>
          <BackButton />
        </Body>
      </Content>
      <NavBarBottom />
    </Container>
  );
};
const styles = StyleSheet.create({});
export default OrderScreen;
