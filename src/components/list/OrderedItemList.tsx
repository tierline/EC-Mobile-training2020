import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Text, List, ListItem, Body, Left, Right} from 'native-base';
import {FlatList} from 'react-native';
import UrlApi from '../../api/UrlApi';

// prop の型指定
const OrderedItemList = (prop: {cartItem: CartItem[]}) => {
  const {cartItem} = prop;

  const renderItems = ({item}: {item: CartItem}) => {
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
      data={cartItem}
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
