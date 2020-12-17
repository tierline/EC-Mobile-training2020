import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Input, Text, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import OrderForm from '../components/form/OrderForm';

const OrderFormScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content style={styles.form}>
        <OrderForm />
      <Button full danger onPress={() => navigation.navigate('Complete')}>
      </Content>
    </Container>
  )
};
const styles = StyleSheet.create({
  form: {
    margin: 15,
  },
});
export default OrderFormScreen;
