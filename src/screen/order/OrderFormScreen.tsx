import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, H2 } from 'native-base';
import OrderForm from '../../components/form/OrderForm';

/**
 * 注文フォーム画面
 */
const OrderFormScreen = () => {
  return (
    <Container style={styles.body}>
      <Content>
        <View style={styles.head}>
          <H2 style={styles.heading}>お届け先</H2>
        </View>
        <OrderForm />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  body: {
    // flex: 1,
  },
  head: {
    paddingTop: '8%',
  },
  heading: {
    textAlign: 'center',
  },
  orderForm: {
    // flex: 1,
  },
});
export default OrderFormScreen;
