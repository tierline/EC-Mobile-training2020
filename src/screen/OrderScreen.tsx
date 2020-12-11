import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Container, Content, Text, Body, Row} from 'native-base';
import NavBarBottom from '../components/NavBarBottom';
import {useNavigation} from '@react-navigation/native';

const OrderScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <Text>OrderScreen</Text>
      </Content>
      <Content>
        <Body>
          <Button danger onPress={() => navigation.navigate('OrderForm')}>
            <Text>住所入力に進む</Text>
          </Button>
        </Body>
      </Content>
      <NavBarBottom />
    </Container>
  );
};
const styles = StyleSheet.create({});
export default OrderScreen;
