import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Body} from 'native-base';
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
      <View style={styles.button}>
        <Body>
          <Button full primary onPress={() => navigation.navigate('OrderForm')}>
            <Text>注文する</Text>
          </Button>
        </Body>
      </View>
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
  button: {
    flex: 1,
  },
});
export default CartScreen;
