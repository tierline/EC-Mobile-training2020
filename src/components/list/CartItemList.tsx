import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Right,
  Button
} from 'native-base';
import { FlatList, View, ScrollView } from 'react-native';
import CartAction from '../../api/member/CartAction'

const CartItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    CartAction.fetch('list')
      .then((cart) => {
        console.log("カート内の商品情報を取得しました" + cart.items)
        setItems(cart.items);
      })
      .catch(() => {
        console.log('-----カート内の商品を取得できませんでした。-----');
      })
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Card>
        <CardItem>
          <Text>{item.productName}{item.quantity}個、単価{item.productPrice}円</Text>
        </CardItem>
        <Right>
          <Button danger small onPress={() => CartAction.delete('delete', item.productId)}>
            <Text>削除する</Text>
          </Button>
        </Right>
      </Card>
    )
  }

  return (
    <View>
      <ScrollView>
        <View>
          <FlatList data={items} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
        </View>
      </ScrollView>
    </View>

  );
};

export default CartItemList;
