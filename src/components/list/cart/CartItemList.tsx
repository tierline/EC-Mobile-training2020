import React, { useEffect, useState } from 'react';
import { Card, CardItem, Text, Right, Button, H3, View } from 'native-base';
import { FlatList, Image, StyleSheet } from 'react-native';
import UrlApi from '../../../api/UrlApi';
import { flashMessage } from '../../flashMessage/FlashMessage';
import { useNavigation } from '@react-navigation/native';
import Api from '../../../api/Api';
import { CartItem } from '../../../domain/CartItem';
import Storage from '../../../Storage';
import LargeButton from '../../../components/button/LargeButton';

// TOREVIEW : リストもコンポーネントに切り出したい
const CartItemList = () => {
  const navigation = useNavigation();
  const [cartItems, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const navi = () => {
    navigation.navigate('OrderForm');
  };

  const callBack = (res: any) => {
    Storage.setCart(res.items);
    setItems(res.items);
  };

  useEffect(() => {
    Api.get('/api/member/cart/', callBack);
  }, [count]);

  const removeParticularProduct = async (
    productId: number,
    productName: string,
  ) => {
    await Api.post(`/api/member/cart/remove/${productId}`, setItems);
    flashMessage(productName, '削除しました', 500, 'red');
    setCount(count + 1);
  };

  //   // clean up関数(必要になったら追加する)
  // useEffect(() => {
  //   // let mounted = true;
  //   Api.get('/api/member/cart/list', setItems);
  // return () => {
  //   mounted = false;
  // };
  // }, [cartItems]);  const [orderedItems, setOrderedItem] = useState([]);

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

  return cartItems.length > 0 ? (
    <View style={styles.body}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <LargeButton text={'注文処理へ進む'} onPress={navi} />
    </View>
  ) : (
    <View style={styles.body}>
      <H3>カートに商品がありません</H3>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'stretch',
    width: 100,
    height: 100,
  },
  body: {
    flex: 8,
  },
});

export default CartItemList;
