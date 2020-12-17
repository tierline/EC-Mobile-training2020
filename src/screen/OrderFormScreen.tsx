import React from 'react';
import {Container, Content} from 'native-base';
import OrderForm from '../components/form/orderForm/OrderForm';

const OrderFormScreen = () => {
  return (
    <Container>
      <Content>
        <OrderForm />
      </Content>
      {/* <Content>
      </Content>
      <Button full danger onPress={() => navigation.navigate('Complete')} /> */}
    </Container>
  );
};
export default OrderFormScreen;
