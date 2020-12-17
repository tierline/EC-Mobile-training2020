import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import OrderForm from '../components/form/orderForm/OrderForm';

const OrderFormScreen = () => {
  return (
    <Container>
      <Content style={styles.form}>
        <OrderForm />
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  form: {
    margin: 15,
  },
});
export default OrderFormScreen;
