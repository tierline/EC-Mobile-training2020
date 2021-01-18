import React, { useEffect, useState } from 'react';
import { Card, CardItem, Text, Right, Button, H3 } from 'native-base';
import { FlatList, Image, StyleSheet } from 'react-native';
import UrlApi from '../../../api/UrlApi';
import { flashMessage } from '../../flashMessage/FlashMessage';
import Api from '../../../api/Api';
import { CartItem } from '../../../domain/CartItem';

// TOREVIEW : リストもコンポーネントに切り出したい
// 個別の画面はほとんど共通化できない。
// screenへ
const CartItemList = (prop: { setHasItem: Function }) => {
  const [cartItems, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    Api.get('/api/member/cart/list', setItems, mounted);
    return () => {
      mounted = false;
    };
  }, [cartItems]);

  // TOREVIEW　: 綺麗にしたい
  const removeParticularProduct = async (
    productId: number,
    productName: string,
  ) => {
    await Api.post(`/api/member/cart/delete/${productId}`);
    await Api.get('/api/member/cart/list', setItems, true);
    await Api.get('/api/member/cart/hasItem', prop.setHasItem);
    flashMessage(productName, '削除しました', 500, 'red');
  };

  const renderItem = ({ item }: { item: CartItem }) => {
    return (
      <Card>
        <CardItem>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{ uri: UrlApi.image(item.productImage) }}
          />
          <Right>
            <H3>
              {item.productName} {item.quantity}個
            </H3>
            <Text>単価{item.productPrice}円</Text>
            <Button
              danger
              small
              onPress={() =>
                removeParticularProduct(item.productId, item.productName)
              }>
              <Text>削除する</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  };

  return (
    <FlatList
      data={cartItems}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'stretch',
    width: 100,
    height: 100,
  },
});

export default CartItemList;
