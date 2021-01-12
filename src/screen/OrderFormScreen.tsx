import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, H2, Body } from 'native-base';
import OrderForm from '../components/form/orderForm/OrderForm';

const OrderFormScreen = () => {
  return (
    <Container>
      <Content>
        <View style={styles.orderForm}>
          <Body>
            <H2>お届け先</H2>
          </Body>
        </View>
        <View style={styles.orderForm}>
          <OrderForm />
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  orderForm: {
    paddingTop: '3%',
  },
});
export default OrderFormScreen;
