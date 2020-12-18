import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {
  Button,
  Container,
  Content,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  H1,
  H2,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Api from '../api/Api';

const CompleteScreen = ({route}: any) => {
  const [orderItems, setItems] = useState([]);
  const [orderDetail, setOrder]: any = useState([]);
  const nav = useNavigation();
  const {orderId} = route.params;

  useEffect(() => {
    Api.fetchOrderDetails('/api/member/order/orderDetails', orderId, setOrder);
    Api.fetchOrderDetails('/api/member/order/itemDetails', orderId, setItems);
  }, [orderId]);

  const renderItems = ({item}: any) => {
    return (
      <List>
        <ListItem noIndent>
          <Left>
            <Text>{item.name}</Text>
          </Left>
          <Body>
            <Text>{item.price}円</Text>
          </Body>
          <Right>
            <Text>{item.quantity}個</Text>
          </Right>
        </ListItem>
      </List>
    );
  };

  return (
    <Container>
      <Content>
        <Content style={{paddingTop: '2%'}}>
          <H1>ご注文ありがとうございました</H1>
        </Content>
        <List>
          <ListItem noIndent>
            <Left>
              <Text>注文日</Text>
            </Left>
            <Body>
              <Text>{orderDetail.date}</Text>
            </Body>
          </ListItem>
          <ListItem noIndent>
            <Left>
              <Text>お名前</Text>
            </Left>
            <Body>
              <Text>{orderDetail.name}様</Text>
            </Body>
          </ListItem>
          <ListItem noIndent>
            <Left>
              <Text>お届け先</Text>
            </Left>
            <Body>
              <Text>{orderDetail.address}</Text>
            </Body>
          </ListItem>
          <ListItem noIndent>
            <Left>
              <Text>メールアドレス</Text>
            </Left>
            <Body>
              <Text>{orderDetail.email}</Text>
            </Body>
          </ListItem>
          <ListItem noIndent>
            <Left>
              <Text>電話番号</Text>
            </Left>
            <Body>
              <Text>{orderDetail.phone}</Text>
            </Body>
          </ListItem>
          <ListItem noIndent>
            <Left>
              <Text>合計金額</Text>
            </Left>
            <Body>
              <Text>{orderDetail.price}円</Text>
            </Body>
          </ListItem>
        </List>
        <Content style={{paddingTop: '4%'}}>
          <Text>
            <H2>ご注文された商品</H2>
          </Text>
        </Content>

        <FlatList
          data={orderItems}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
        />
      </Content>
      <Button full onPress={() => nav.navigate('Home')}>
        <Text>Home</Text>
      </Button>
    </Container>
  );
};

export default CompleteScreen;
