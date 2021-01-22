import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Card, CardItem, Text, Left, Right } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import MediumIconButton from '../button/MediumIconButton';
import SmallIconButton from '../button/SmallIconButton';

import Storage from '../../Storage';
import UrlApi from '../../api/UrlApi';
import { flashMessage } from '../flashMessage/FlashMessage';
import Api from '../../api/Api';
import { Product } from '../../domain/Product';

const ProductList = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  useEffect(() => {
    Api.get('/api/product', setItems);
  }, []);

  const addProduct = (productId: number, productName: string): void => {
    flashMessage(`${productName}を`, 'カートに追加しました', 500, '#f4511e');
    Api.post(`/api/member/cart/add/${productId}`);
  };

  const navi = (product: Product): void => {
    navigation.navigate('ProductDetail', {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      imagePath: product.imagePath,
    });
  };

  const renderItems = ({ item }: { item: Product }) => {
    // ProductImageComponent 的な。
    return (
      <Card style={styles.card}>
        <CardItem>
          <Left>
            <Text style={styles.itemName}>{item.name}</Text>
          </Left>
          <Right>
            <Text style={styles.itemPrice}>価格:{item.price}円</Text>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{ uri: UrlApi.image(item.imagePath) }}
          />
        </CardItem>
        {Storage.getIsAuthenticated() ? (
          <CardItem>
            <Left>
              <MediumIconButton
                text={'カートに入れる'}
                onPress={() => addProduct(item.id, item.name)}
                iconName={'shopping-cart'}
              />
            </Left>
            <Right>
              <SmallIconButton
                text={'詳細'}
                onPress={() => navi(item)}
                iconName={'info'}
              />
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
    marginLeft: 15,
    marginRight: 15,
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
    margin: 15,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 18,
  },
});

export default ProductList;
