import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
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
import Icon from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';
const ItemList = () => {
  const navigation = useNavigation();
  return (
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>商品名</Text>
              <Icon name="home" size={50} />

              <Text note>価格</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            style={{height: 200, width: 200, flex: 1}}
            source={{
              uri:
                'https://i.gzn.jp/img/2020/06/05/instagram-threw-embedding-api-copyright/00.jpg',
            }}
          />
          {/* <Image source={require('../../assets/po.jpg')} style={{height: 200, width: 200, flex: 1}}/> */}
        </CardItem>
        <CardItem>
          <Left>
            <Button rounded danger>
              <Icon name="thumbs-up" />
              <Text>カートに入れる</Text>
            </Button>
          </Left>
          <Right>
            <Button rounded onPress={() => navigation.navigate('Detail')}>
              <Icon name="chatbubbles" />
              <Text>詳細</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

const styles = StyleSheet.create({});

export default ItemList;
