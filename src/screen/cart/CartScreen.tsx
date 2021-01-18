import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { H2 } from 'native-base';
import NavBarBottom from '../../components/nav/NavBarBottom';
import { useNavigation } from '@react-navigation/native';
import CartItemList from '../../components/list/cart/CartItemList';
import Api from '../../api/Api';
import LargeButton from '../../components/button/LargeButton';

const CartScreen = () => {
  const navigation = useNavigation();
  const [hasItem, setHasItem] = useState(false);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      Api.get('/api/member/cart/hasItem', setHasItem);
    }
    return () => {
      unmounted = true;
    };
  }, []);

  const navi = () => {
    navigation.navigate('OrderForm');
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemList}>
        <CartItemList setHasItem={setHasItem} />
      </View>
      {hasItem ? (
        <LargeButton text={'注文処理へ進む'} onPress={navi} /> // アイコン
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
