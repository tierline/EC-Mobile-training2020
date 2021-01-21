import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Button, Text, View } from 'native-base';
import { OrderHistory } from '../../../domain/OrderHistory';

const DailyOrderList = (props: any) => {
  const { navi, orderHistory } = props;

  const day = (date: string): string => {
    return date.slice(8, 10);
  };

  const renderItems = ({ item }: { item: OrderHistory }) => {
    console.log(item);
    return (
      <View style={styles.button}>
        <Button
          rounded
          success
          onPress={() => {
            navi.navigate('OrderItemDetail', {
              orderId: item.orderId,
              orderDate: item.date,
            });
          }}>
          <Text>{day(item.date)}日</Text>
        </Button>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.list}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={orderHistory}
      renderItem={renderItems}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
const styles = StyleSheet.create({
  button: {
    marginRight: 5,
  },
  list: {
    margin: 5,
  },
});

export default DailyOrderList;
