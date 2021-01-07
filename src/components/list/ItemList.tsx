import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import {Card, CardItem, Text, Button, Left, Body, Right} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import Storage from '../../Storage';
import UrlApi from '../../api/UrlApi';
import {Product} from '../../interface/Interface';
import ProductApi from '../../api/ProductApi';
import CarApi from '../../api/CarApi';
import {flashMessage} from '../flashMessage/FlashMessage';

const ItemList = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  useEffect(() => {
    ProductApi.fetchProduct('/api/product', setItems);
  }, []);

  const addProduct = (productId: number, productName: string) => {
    flashMessage(`${productName}を`, 'カートに追加しました', 100, '#f4511e');
    CarApi.addProductToCart('/api/member/cart/add', productId);
  };

  const renderItems = ({item}: {item: Product}) => {
    return (
      <Card style={styles.card}>
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
            source={{uri: UrlApi.image(item.imagePath)}}
          />
        </CardItem>
        {Storage.getAuth() ? (
          <CardItem>
            <Left>
              <Button danger onPress={() => addProduct(item.id, item.name)}>
                <Text>カートに入れる</Text>
              </Button>
            </Left>
            <Right>
              <Button
                onPress={() =>
                  navigation.navigate('ProductDetail', {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    imagePath: item.imagePath,
                  })
                }>
                <Text>詳細</Text>
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
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: window.width,
    height: 250,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ItemList;
