import React from 'react';
import {FlatList, StyleSheet, View, Button} from 'react-native';

const DailyOrderList = (props: any) => {
  const {navi, items} = props;

  const renderItems = ({item}: {item: any}) => {
    return (
      <View>
        <Button
          title={`${item.date}日`}
          onPress={() => {
            navi.navigate('OrderItemDetail', {
              id: item.id,
              orderDate: item.date,
            });
          }}
        />
      </View>
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

export default DailyOrderList;
// data = [
//  {month :{
//   day:
//   day:
//   day:
// }},
//  {month :{
//   day:
//   day:
// }},
//  {month :{
//   day:
// }},
//  {month :{
//   day:
//   day:
//   day:
//   day:
//   day:
// }}
// ]
