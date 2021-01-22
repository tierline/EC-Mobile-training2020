import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import CartItemList from '../../components/list/cart/CartItemList';
import NavBarBottom from '../../components/nav/NavBarBottom';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <CartItemList />
      <NavBarBottom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
});

export default CartScreen;
