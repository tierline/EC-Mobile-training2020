import React from 'react';
import {Image} from 'react-native';
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
import {Description} from '../interface/Interface';
import NavBarBottom from '../components/nav/NavBarBottom';
import UrlGenerator from '../api/UrlApi';
import CartApi from '../api/CarApi';

const ProductDetailScreen = ({route}: Description) => {
  const {id, name, price, description, imagePath} = route.params;
  const addProduct = (productId: number) => {
    CartApi.addProductToCart('/api/member/cart/add', productId);
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
                style={{height: 300, width: '100%', flex: 1}}
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
            <Button danger onPress={() => addProduct(id)}>
                <Text>カートに入れる</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
      <NavBarBottom />
    </Container>
  );
};

export default ProductDetailScreen;
