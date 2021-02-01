import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  Container,
  Left,
  Body,
  Content,
  CardItem,
  Card,
  Text,
} from 'native-base';
import NavBarBottom from '../components/nav/NavBarBottom';
import MediumIconButton from '../components/button/MediumIconButton';
import UrlGenerator from '../api/UrlApi';
import { flashMessage } from '../components/flashMessage/FlashMessage';
import Api from '../api/Api';
import { RouteForProduct } from '../domain/Product';

/**
 * 商品詳細画面
 *
 * @param param
 */
const ProductDetailScreen = ({ route }: RouteForProduct) => {
  const { id, name, price, description, imagePath } = route.params;
  const addProduct = (productId: number, productName: string): void => {
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
              <MediumIconButton
                text={'カートに入れる'}
                onPress={() => addProduct(id, name)}
                iconName={'shopping-cart'}
              />
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
    height: 250,
    width: '100%',
    flex: 1,
  },
});

export default ProductDetailScreen;
