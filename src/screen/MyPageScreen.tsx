import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBarBottom from '../components/nav/NavBarBottom';
import OrderList from '../components/list/OrderList';

const MyPageScreen = () => {
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
export default MyPageScreen;
