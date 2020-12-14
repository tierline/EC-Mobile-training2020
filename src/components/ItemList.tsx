import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Image, Alert, Dimensions} from 'react-native';
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
import {fetchProduct, fetchImagePath} from './Fetch';
import Storage from './Storage';

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
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{uri: fetchImagePath(item.image_path)}}
          />
        </CardItem>
        {Storage.getAuth() ? (
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
                    imagePath: fetchImagePath(item.image_path),
                  })
                }>
                <Text>詳細</Text>
              </Button>
            </Right>
          </CardItem>
        ) : (
          <Text></Text>
        )}
      </Card>
    );
  };

  return (
    <Content style={styles.list}>
      <FlatList data={items} renderItem={renderItems} />
    </Content>
  );
};

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
  card: {
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: window.width,
    height: 250,
  },
});

export default ItemList;
