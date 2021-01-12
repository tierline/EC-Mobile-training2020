import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBarBottom from '../../components/nav/NavBarBottom';
import OrderList from '../../components/list/order/OrderList';

const OrderHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <OrderList />
      </View>
      <NavBarBottom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderList: {
    flex: 8,
  },
});
export default OrderHistoryScreen;
