import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, Button} from 'react-native';
import OrderApi from '../api/OrderApi';
const OrderItemDetailScreen = ({route}: any) => {
  const {id} = route.params;
  const [items, setItem] = useState([]);
  useEffect(() => {
    OrderApi.fetchOrderItemHistory('/api/member/order/history', id, setItem);
  }, [id]);

  const renderItems = ({item}: {item: any}) => {
    return (
      <View>
        <Button
          title={item.orderDate}
          onPress={() => console.log(item.orderId)}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItems}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default OrderItemDetailScreen;
