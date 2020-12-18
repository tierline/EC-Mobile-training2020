import React, {useEffect, useState} from 'react';
import {Card, CardItem, Text, Right, Button} from 'native-base';
import {FlatList} from 'react-native';
import Api from '../../api/Api';

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

  // useEffect(() => {
  //   Api.fetchCart('/api/member/cart/list', setItems);
  // }, [items]);

  const removeProduct = (productId: number) => {
    Api.removeProductFromCart('/api/member/cart/delete', productId);
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <Card>
        <CardItem>
          <Text>
            {item.productName}
            {item.quantity}個、単価{item.productPrice}円
          </Text>
        </CardItem>
        <Right>
          <Button danger small onPress={() => removeProduct(item.productId)}>
            <Text>削除する</Text>
          </Button>
        </Right>
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

export default CartItemList;
