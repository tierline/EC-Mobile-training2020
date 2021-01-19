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
const CartItemList = () => {
  const [cartItems, setItems] = useState([]);

  // const callBack = (res: any, mounted: boolean) => {
  //   if (mounted) {
  //     setItems(res.items);
  //   }
  // };

  useEffect(() => {
    Api.get('/api/member/cart/', setItems);
  }, [cartItems]);

  console.log('mugen');

  //   // clean up関数(必要になったら追加する)
  // useEffect(() => {
  //   // let mounted = true;
  //   Api.get('/api/member/cart/list', setItems);
  // return () => {
  //   mounted = false;
  // };
  // }, [cartItems]);  const [orderedItems, setOrderedItem] = useState([]);

  const removeParticularProduct = (productId: number, productName: string) => {
    Api.post(`/api/member/cart/remove/${productId}`, setItems);
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
    // <Text>{cartItems}</Text>
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
