import React, {useEffect, useState} from 'react';
import {Card, CardItem, Text, Right, Button, H3} from 'native-base';
import {FlatList, Image, StyleSheet} from 'react-native';
import CartApi from '../../api/CartApi';
import UrlApi from '../../api/UrlApi';
import {flashMessage} from '../flashMessage/FlashMessage';

const CartItemList = (prop: any) => {
  const [cartItems, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    CartApi.fetchCartItems('/api/member/cart/list', setItems, mounted);
    return () => {
      mounted = false;
    };
  }, []);

  // 綺麗にしたい
  const removeParticularProduct = async (productId: number) => {
    await CartApi.removeProduct('/api/member/cart/delete', productId);
    await CartApi.fetchCartItems('/api/member/cart/list', setItems, true);
    await CartApi.hasItem('/api/member/cart/hasItem', prop.setHasItem);
    flashMessage('削除しました', '', 500, 'red');
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <Card>
        <CardItem>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{uri: UrlApi.image(item.productImage)}}
          />
          <Right>
            <H3>
              {item.productName} {item.quantity}個
            </H3>
            <Text>単価{item.productPrice}円</Text>
            <Button
              danger
              small
              onPress={() => removeParticularProduct(item.productId)}>
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
