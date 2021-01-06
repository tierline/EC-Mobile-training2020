import React from 'react';
import {FlatList, StyleSheet, Button} from 'react-native';

const DailyOrderList = (props: any) => {
  const {navi, items} = props;

  const renderItems = ({item}: {item: any}) => {
    return (
      <Button
        title={`${item.date}日`}
        onPress={() => {
          navi.navigate('OrderItemDetail', {
            id: item.orderId,
            orderDate: item.date,
          });
        }}
      />
    );
  };
  return (
    <FlatList
      style={styles.list}
      data={items}
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
