import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  Container,
  Left,
  Button,
  Body,
  Text,
  Content,
  CardItem,
  Card,
} from 'native-base';
import NavBarBottom from '../components/nav/NavBarBottom';
import UrlGenerator from '../api/UrlApi';
import { flashMessage } from '../components/flashMessage/FlashMessage';
import Api from '../api/Api';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductDetailScreen = ({ route }: RouteForProduct) => {
  const { id, name, price, description, imagePath } = route.params;
  const addProduct = (productId: number, productName: string) => {
    flashMessage(`${productName}を`, 'カートに追加しました', 500, '#f4511e');
    Api.post(`/api/member/cart/add/${productId}`);
  };
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>商品名{name}</Text>
                <Text>値段{price}円</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                style={styles.img}
                resizeMode={'contain'}
                source={{
                  uri: UrlGenerator.image(imagePath),
                }}
              />
              <Text>商品説明</Text>
              <Text>{description}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Button
                style={styles.button}
                onPress={() => addProduct(id, name)}>
                <Icon style={styles.icon} name="shopping-cart" size={25} />
                <Text style={styles.text}>カートに入れる</Text>
              </Button>
              {/* <Button danger onPress={() => addProduct(id, name)}>
                <Text>カートに入れる</Text>
              </Button> */}
            </Body>
          </CardItem>
        </Card>
      </Content>
      <NavBarBottom />
    </Container>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    margin: 10,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#70372c',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 17,
    color: '#fff',
  },
  img: {
    height: 300,
    width: '100%',
    flex: 1,
  },
});

export default ProductDetailScreen;
