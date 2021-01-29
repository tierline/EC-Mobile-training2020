import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { CardItem, Left, Body, Thumbnail, Card } from 'native-base';
import UrlApi from '../../api/UrlApi';
import NavBarBottom from '../../components/nav/NavBarBottom';
import Api from '../../api/Api';
import { RouteForOrderHistory } from '../../domain/OrderHistory';
import { OrderItem } from '../../domain/OrderItem';

const OrderItemDetailScreen = ({ route }: RouteForOrderHistory) => {
  const { orderId, date } = route.params;
  const [orderedItems, setOrderedItem] = useState([]);

  useEffect(() => {
    Api.get(`/api/member/order/history/item/${orderId}`, setOrderedItem);
  }, [orderId]);

  const renderItems = ({ item }: { item: OrderItem }) => {
    return (
      <View>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri: UrlApi.image(item.imagePath),
                }}
              />
            </Left>
            <Body>
              <Text>商品名：{item.name}</Text>
              <Text>価格：{item.price}円</Text>
              <Text>個数：{item.quantity}</Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.orderList}>
        <Text>{date}</Text>
        <FlatList
          data={orderedItems}
          renderItem={renderItems}
          keyExtractor={(orderedItem, index) => index.toString()}
        />
      </View>
      <NavBarBottom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderList: {
    flex: 8,
  },
});
export default OrderItemDetailScreen;
