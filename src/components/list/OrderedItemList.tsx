import React, {useEffect, useState} from 'react';
import {Text, List, ListItem, Body, Left} from 'native-base';
import {FlatList} from 'react-native';
import OrderApi from '../../api/OrderApi';

const OrderedItemList = (prop: any) => {
  const [orderItems, setItems] = useState([]);
  const orderId = prop.orderId;

  useEffect(() => {
    let isMounted = true;
    OrderApi.fetchOrderDetails(
      '/api/member/order/orderedItemList',
      orderId,
      setItems,
      isMounted,
    );
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItems = ({item}: any) => {
    return (
      <List>
        <ListItem noIndent>
          <Left>
            <Text>{item.name}</Text>
          </Left>
          <Body>
            <Text>
              {item.price}円 {item.quantity}個
            </Text>
          </Body>
        </ListItem>
      </List>
    );
  };

  return (
    <FlatList
      data={orderItems}
      renderItem={renderItems}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default OrderedItemList;
