import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, H2} from 'native-base';
import NavBarBottom from '../components/nav/NavBarBottom';
import {useNavigation} from '@react-navigation/native';
import CartItemList from '../components/list/CartItemList';
import CartApi from '../api/CartApi';

const CartScreen = () => {
  const navigation = useNavigation();
  const [hasItem, setHasItem] = useState(false);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      CartApi.hasItem('/api/member/cart/hasItem', setHasItem);
    }
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.itemList}>
        <CartItemList setHasItem={setHasItem} />
      </View>
      {hasItem ? (
        <Button
          full
          primary
          large
          onPress={() => navigation.navigate('OrderForm')}>
          <Text>注文する</Text>
        </Button>
      ) : (
        <View style={styles.message}>
          <H2>カートに商品がありません</H2>
        </View>
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
  message: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
});
export default CartScreen;
