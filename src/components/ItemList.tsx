import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Image, Alert} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Right,
  Item,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {fetchProduct} from './Fetch';

const ItemList = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchProduct()
      .then((products) => {
        setItems(products);
      })
      .catch(() => {
        console.log('-----error-----');
      });
  }, []);

  const renderItems = ({item}: {item: any} /**interface */) => {
    return (
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>商品名:{item.name}</Text>
              <Text>価格:{item.price}円</Text>
              <Text>{item.image_path}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          {/* <Image
        style={{height: 200, width: 200, flex: 1}}
       source={require('./image/'+item.image_path)}
       /> */}
          <Image
            style={{height: 200, width: 200, flex: 1}}
            source={require('./image/ramune.jpeg')}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button danger>
              <Text>カートに入れる</Text>
            </Button>
          </Left>
          <Right>
            <Button
              onPress={() =>
                navigation.navigate('Detail', {
                  name: item.name,
                  price: item.price,
                  description: item.description,
                })
              }>
              <Text>詳細</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  };

  return (
    <Content style={styles.list}>
      <FlatList data={items} renderItem={renderItems} />
    </Content>
  );
};

const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
});

export default ItemList;
