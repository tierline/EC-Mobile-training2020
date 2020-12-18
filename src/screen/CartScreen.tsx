import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'native-base';
import NavBarBottom from '../components/nav/NavBarBottom';
import {useNavigation} from '@react-navigation/native';
import CartItemList from '../components/list/CartItemList';

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.itemList}>
        <CartItemList />
      </View>
      <Button
        full
        primary
        large
        onPress={() => navigation.navigate('OrderForm')}>
        <Text>注文する</Text>
      </Button>
      <NavBarBottom />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemList: {
    flex: 8,
  },
});
export default CartScreen;
