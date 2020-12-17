import React from 'react';
import {Button, Container, Content, Text, Body} from 'native-base';
import NavBarBottom from '../components/nav/NavBarBottom';
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
export default OrderScreen;
