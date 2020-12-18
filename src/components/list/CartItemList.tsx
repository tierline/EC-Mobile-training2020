import React, {useEffect, useState} from 'react';
import {Card, CardItem, Text, Right, Button, H3} from 'native-base';
import {FlatList, Image, StyleSheet} from 'react-native';
import CartApi from '../../api/CarApi';
import UrlApi from '../../api/UrlApi';

const CartItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      CartApi.fetchCart('/api/member/cart/list', setItems);
    }
    return () => {
      unmounted = true;
    };
  }, [items]);

  const removeProduct = (productId: number) => {
    CartApi.removeProductFromCart('/api/member/cart/delete', productId);
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
            <Button danger small onPress={() => removeProduct(item.productId)}>
              <Text>削除する</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    alignSelf: 'stretch',
    width: 100,
    height: 100,
  },
});

export default CartItemList;
