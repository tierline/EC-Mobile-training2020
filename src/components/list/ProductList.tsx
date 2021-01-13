import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Card, CardItem, Text, Button, Left, Body, Right } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import Storage from '../../Storage';
import UrlApi from '../../api/UrlApi';
import { flashMessage } from '../flashMessage/FlashMessage';
import Api from '../../api/Api';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductList = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  useEffect(() => {
    Api.get('/api/product', setItems);
  }, []);

  const addProduct = (productId: number, productName: string) => {
    flashMessage(`${productName}を`, 'カートに追加しました', 500, '#f4511e');
    Api.post(`/api/member/cart/add/${productId}`);
  };

  const renderItems = ({ item }: { item: Product }) => {
    return (
      <Card style={styles.card}>
        <CardItem>
          <Left>
            <Body>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>価格:{item.price}円</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{ uri: UrlApi.image(item.imagePath) }}
          />
        </CardItem>
        {Storage.getAuth() ? (
          <CardItem>
            <Left>
              <Button
                style={styles.button}
                onPress={() => addProduct(item.id, item.name)}>
                <Icon style={styles.icon} name="shopping-cart" size={30} />
                <Text style={styles.text}>カートに入れる</Text>
              </Button>
            </Left>
            <Right>
              <Button
                style={styles.button}
                onPress={() =>
                  navigation.navigate('ProductDetail', {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    imagePath: item.imagePath,
                  })
                }>
                <Icon style={styles.icon} name="info" size={25} />
                <Text style={styles.text}>詳細</Text>
              </Button>
            </Right>
          </CardItem>
        ) : (
          <Text />
        )}
      </Card>
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

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  list: {
    margin: 5,
  },
  card: {
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 17,
    color: '#fff',
  },
  icon: {
    color: '#fff',
    marginLeft: 10,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#70372c',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: window.width,
    height: 250,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductList;
