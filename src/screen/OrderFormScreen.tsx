import React from 'react';
import {Container, Content} from 'native-base';
import OrderForm from '../components/form/orderForm/OrderForm';

const OrderFormScreen = () => {
  return (
    <Container>
      <Content>
        <OrderForm />
      </Content>
    </Container>
  );
};
export default OrderFormScreen;
