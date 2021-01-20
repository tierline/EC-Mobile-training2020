import React from 'react';
import { StyleSheet, View } from 'react-native';
import { H2 } from 'native-base';
import OrderForm from '../../components/form/OrderForm';

const OrderFormScreen = () => {
  return (
    <View style={styles.body}>
      <View style={styles.head}>
        <H2 style={styles.heading}>お届け先</H2>
      </View>
      <View>
        <OrderForm />
      </View>
    </View>
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
