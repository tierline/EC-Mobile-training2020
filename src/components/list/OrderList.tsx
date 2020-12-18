import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Body} from 'native-base';
import OrderApi from '../../api/OrderApi';
import Storage from '../../Storage';

const OrderList = () => {
  const [items, setItems] = useState(0);

  //  const renderItems = ({item}: {item: any}) => {
  //    return(

  //    )
  //  }
  useEffect(() => {
    const email = {email: Storage.getEmail()};
    OrderApi.fetchOrderHistory('/api/member/order/history', email, setItems);
  }, []);

  return (
    <View>
      <Body>
        <Text>注文履歴</Text>
        <Text>ID:{items}</Text>
        <Text>{Storage.getEmail()}</Text>
      </Body>
    </View>
    //    <FlatList
    //     style={styles.list}
    //    data={items}
    //    renderItem={renderItems
    //     keyExtractor={(item, index) => index.toString()}
    //     />
  );
};

// const styles = StyleSheet.create({
//   list: {
//     margin: 10,
//   },
// });

export default OrderList;
