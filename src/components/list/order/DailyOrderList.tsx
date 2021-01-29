import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem, Text } from 'native-base';
import { OrderHistory } from '../../../domain/OrderHistory';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * 注文IDの注文商品リスト
 *
 * @param props
 */
const DailyOrderList = (props: any) => {
  const { navi, orderHistory } = props;

  const format = (formatDate: string): string => {
    const dateAndTime = formatDate.split('T');
    const [year, month, day] = dateAndTime[0].split('-');
    const [hour, minute] = dateAndTime[1].split(':');
    return `${year}年${month}月${day}日 ${hour}時${minute}分`;
  };

  const renderItems = ({ item }: { item: OrderHistory }) => {
    return (
      <ListItem
        button
        onPress={() => {
          navi.navigate('OrderItemDetail', {
            orderId: item.orderId,
            orderDate: item.date,
          });
        }}>
        <Icon name="angle-right" size={20} style={styles.icon} />
        <Text>
          注文番号【
          {item.orderId}】{format(item.date)}
        </Text>
      </ListItem>
    );
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={orderHistory}
      renderItem={renderItems}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingRight: 10,
  },
});

export default DailyOrderList;
