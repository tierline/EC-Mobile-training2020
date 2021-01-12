import React from 'react';
import { FlatList, StyleSheet, Button } from 'react-native';

const DailyOrderList = (props: any) => {
  const { navi, orderHistory } = props;

  const renderItems = ({ item }: { item: OrderHistory }) => {
    return (
      <Button
        title={`${item.date}日`}
        onPress={() => {
          navi.navigate('OrderItemDetail', {
            orderId: item.orderId,
            orderDate: item.date,
          });
        }}
      />
    );
  };
  return (
    <FlatList
      style={styles.list}
      data={orderHistory}
      renderItem={renderItems}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  list: {
    margin: 5,
  },
});

export default DailyOrderList;
