import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import OrderForm from '../components/form/OrderForm';

const OrderFormScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <OrderForm />
        <Text>aaaaaaaaaaaaaa</Text>
      </Content>
      {/* <Content>
      </Content>
      <Button full danger onPress={() => navigation.navigate('Complete')} /> */}
    </Container>
  );
};
const styles = StyleSheet.create({});
export default OrderFormScreen;
