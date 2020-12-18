import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'native-base';
import NavBarBottom from '../components/nav/NavBarBottom';
import {useNavigation} from '@react-navigation/native';
import CartItemList from '../components/list/CartItemList';
import CartApi from '../api/CarApi';

const CartScreen = () => {
  const navigation = useNavigation();
  const [hasItem, setBoolean] = useState(true);

  useEffect(() => {
    CartApi.hasItem('/api/member/cart/hasItem', setBoolean);
  }, [hasItem]);

  return (
    <View style={styles.container}>
      <View style={styles.itemList}>
        <CartItemList />
      </View>
      {hasItem && (
        <Button
          full
          primary
          large
          onPress={() => navigation.navigate('OrderForm')}>
          <Text>注文する</Text>
        </Button>
      )}
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
