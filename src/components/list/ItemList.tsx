import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {fetchProduct} from '../../api/common/Product';
import Storage from '../../Storage';
import {url} from '../../settings/properties';

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

  const generateImagePath = (imagePath: string): string => {
    return `${url}/image/${imagePath}`;
  };

  const renderItems = ({item}: {item: any} /**interface */) => {
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
            source={{uri: generateImagePath(item.image_path)}}
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
                    imagePath: generateImagePath(item.image_path),
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
    <FlatList
      style={styles.list}
      data={items}
      renderItem={renderItems}
      keyExtractor={(item) => item.id.toString()}
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
});

export default ItemList;
