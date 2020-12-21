import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import {Accordion} from 'native-base';
import OrderApi from '../../api/OrderApi';
import Storage from '../../Storage';
import {useNavigation} from '@react-navigation/native';

const OrderList = () => {
  const navigation = useNavigation();
  const [items, setItem] = useState([]);
  const [days, setDay] = useState([]);
  useEffect(() => {
    const email = {email: Storage.getEmail()};
    OrderApi.fetchOrderHistory('/api/member/order/history', email, setItem);
  }, []);

  const getMonth = (orderDay: string) => {
    const month = orderDay.slice(5, 7);
    OrderApi.fetchOrderItemHistory('/api/member/order/history', month, setDay);
    return month;
  };

  const renderItems = ({item}: {item: any}) => {
    return (
      <View>
        <Button
          title={item.orderDate}
          onPress={() =>
            navigation.navigate('OrderItemDetail', {
              id: item.orderDate,
            })
          }
        />
      </View>
    );
  };
  //   return (
  //     <FlatList
  //       style={styles.list}
  //       data={items}
  //       renderItem={renderItems}
  //       keyExtractor={(item, index) => index.toString()}
  //     />
  //   );
  // };

  const dataArray = () => {
    const list: any[] = [];
    items.forEach((item: any) => {
      const data = {
        title: (
          <View>
            <Button
              title={item.orderDate}
              onPress={() => getMonth(item.orderDate)}
            />
          </View>
        ),
        content: (
          <FlatList
            style={styles.list}
            data={days}
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

// return (
//   <View style={styles.button}>
//     <Content padder>
//       <Accordion dataArray={dataList} expanded={0} />
//     </Content>
//   </View>
// );

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
