import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import {Accordion} from 'native-base';
import OrderApi from '../../api/OrderApi';
import Storage from '../../Storage';
import {useNavigation} from '@react-navigation/native';

const OrderList = () => {
  const navigation = useNavigation();
  const [items, setItem] = useState([]);
  useEffect(() => {
    const email = {email: Storage.getEmail()};
    OrderApi.fetchOrderHistory('/api/member/order/history', email, setItem);
  }, []);

  const renderItems = ({item}: {item: any}) => {
    console.log('renderItems');
    const month = item.orderMonth.slice(5, 7);
    const day = item.orderDay.slice(0, 2);
    console.log(month, ':', day);
    console.log(item.orderId);
    return (
      <View>
        <Button
          title={item.orderMonth}
          onPress={() =>
            navigation.navigate('OrderItemDetail', {
              id: item.orderId,
              orderDate: item.orderDay,
            })
          }
        />
      </View>
    );
  };

  // const dataArray = () => {
  //   const list: any[] = [];
  //   items.forEach((item: any) => {
  //     const data = {
  //       title: <Button title={'tes'} onPress={() => console.log('tes')} />,
  //       content: item,
  //     };
  //     list.push(data);
  //   });
  //   return list;
  // };
  const dataArray = () => {
    const list: any[] = [];
    items.forEach((item: any) => {
      const data = {
        title: item.orderMonth,
        content: (
          <FlatList
            style={styles.list}
            data={items}
            renderItem={renderItems}
            keyExtractor={(item, index) => index.toString()}
          />
        ),
      };
      list.push(data);
    });
    return list;
  };
  return (
    <View>
      <View>
        <Text />
        <Accordion dataArray={dataArray()} expanded={0} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '10',
  },
  text: {
    color: 'white',
  },
  list: {
    margin: 5,
  },
});

export default OrderList;
