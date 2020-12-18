import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Content} from 'native-base';
import OrderForm from '../components/form/orderForm/OrderForm';

const OrderFormScreen = () => {
  return (
    <Container>
      <Content>
        <View style={styles.orderForm}>
          <OrderForm />
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  orderForm: {
    paddingTop: '10%',
  },
});
export default OrderFormScreen;
