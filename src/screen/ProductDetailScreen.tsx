import React from 'react';
import {Image, StyleSheet} from 'react-native';
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
import {flashMessage} from '../components/flashMessage/FlashMessage';
import Api from '../api/Api';

const ProductDetailScreen = ({route}: Description) => {
  const {id, name, price, description, imagePath} = route.params;
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
              <Button danger onPress={() => addProduct(id, name)}>
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

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: '100%',
    flex: 1,
  },
});

export default ProductDetailScreen;
