import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {Body, Card, CardItem, Thumbnail, Left} from 'native-base';
import OrderApi from '../../api/OrderApi';
import Storage from '../../Storage';
import Url from '../../api/UrlApi';

const OrderList = () => {
  const [items, setItems] = useState([]);

  const renderItems = ({item}: {item: any}) => {
    return (
      <View>
        {/* <Text>orderId:{item.orderId}</Text> */}
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri: Url.image(item.imagePath),
                }}
              />
              <Body>
                <Text>商品名:{item.imagePath}</Text>
                <Text>商品名:{item.name}</Text>
                <Text>
                  価格:{item.unitPrice} 個数:{item.quantity}
                </Text>
                <Text>合計金額:{item.unitPrice * item.quantity}円</Text>
                <Text>注文日:{item.date}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </View>
    );
  };
  useEffect(() => {
    const email = {email: Storage.getEmail()};
    OrderApi.fetchOrderHistory('/api/member/order/history', email, setItems);
  }, []);

  return (
    <View>
      <Body>
        <Text>注文履歴</Text>
      </Body>
      <FlatList style={styles.list} data={items} renderItem={renderItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
});

export default OrderList;
