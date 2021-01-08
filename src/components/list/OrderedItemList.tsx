import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Text, List, ListItem, Body, Left, Right} from 'native-base';
import {FlatList} from 'react-native';
import UrlApi from '../../api/UrlApi';

const OrderedItemList = (prop: any) => {
  // const [orderItems, setItems] = useState([]);
  // const orderId = prop.orderId;
  const {orderItem} = prop;
  // useEffect(() => {
  //   let isMounted = true;
  //   OrderApi.fetchOrderDetails(
  //     '/api/member/order/orderedItemList',
  //     orderId,
  //     setItems,
  //     isMounted,
  //   );
  //   return () => {
  //     isMounted = false;
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const renderItems = ({item}: any) => {
    return (
      <List>
        <ListItem noIndent>
          <Left>
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={{uri: UrlApi.image(item.productImage)}}
            />
          </Left>
          <Body>
            <Text>{item.productName}</Text>
          </Body>
          <Right>
            <Text>{item.productPrice}円</Text>
            <Text>{item.quantity}個</Text>
          </Right>
        </ListItem>
      </List>
    );
  };

  return (
    <FlatList
      data={orderItem}
      renderItem={renderItems}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
export default OrderedItemList;
