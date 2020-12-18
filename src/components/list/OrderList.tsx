import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {Body, Card, CardItem, Thumbnail, Left} from 'native-base';
import OrderApi from '../../api/OrderApi';
import Storage from '../../Storage';

const OrderList = () => {
  const [items, setItems] = useState([]);

  const renderItems = ({item}: {item: any}) => {
    return (
      <View>
        <Text>orderId:{item.orderId}</Text>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://assets.media-platform.com/gizmodo/dist/images/2019/04/19/20190418-google-tends-to-bully-other-browsers-01-w1280.jpg',
                }}
              />
              <Body>
                <Text>name:{item.name}</Text>
                <Text>
                  price:{item.unitPrice} quantity:{item.quantity}
                </Text>
                <Text>total:{item.unitPrice * item.quantity}</Text>
                <Text>date:{item.date}</Text>
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
    // <View>
    //   <Body>
    //     <Text>注文履歴</Text>
    //     {/* <Text>ID:{items}</Text> */}
    //     <Text>{Storage.getEmail()}</Text>
    //   </Body>
    // </View>
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
