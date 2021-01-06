import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {CardItem, Left, Body, Thumbnail, Card} from 'native-base';
import OrderApi from '../api/OrderApi';
import UrlApi from '../api/UrlApi';
import NavBarBottom from '../components/nav/NavBarBottom';
const OrderItemDetailScreen = ({route}: any) => {
  const {id, orderDate} = route.params;
  const [items, setItem] = useState([]);
  useEffect(() => {
    OrderApi.fetchOrder('/api/member/order/history/item', id, setItem);
  }, [id]);

  const renderItems = ({item}: {item: any}) => {
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
        <Text>{orderDate}</Text>
        <FlatList
          data={items}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
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
