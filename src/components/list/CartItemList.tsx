import React, {useEffect, useState} from 'react';
import {Card, CardItem, Text, Right, Button, H3} from 'native-base';
import {FlatList, Image, StyleSheet} from 'react-native';
import Api from '../../api/Api';
import Url from '../../api/Url';

const CartItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      Api.fetchCart('/api/member/cart/list', setItems);
    }
    return () => {
      unmounted = true;
    };
  }, [items]);

  const removeProduct = (productId: number) => {
    Api.removeProductFromCart('/api/member/cart/delete', productId);
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <Card>
        <CardItem>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{uri: Url.image(item.productImage)}}
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
