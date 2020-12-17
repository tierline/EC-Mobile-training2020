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
        <ListItem noIndent style={{backgroundColor: '#fde3e2'}}>
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
        <Text>注文番号{orderId}</Text>
        <List>
          <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
            <Left>
              <Text>注文日</Text>
            </Left>
            <Body>
              <Text>{orderDetail.date}</Text>
            </Body>
          </ListItem>
          <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
            <Left>
              <Text>お名前</Text>
            </Left>
            <Body>
              <Text>{orderDetail.name}様</Text>
            </Body>
          </ListItem>
          <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
            <Left>
              <Text>お届け先</Text>
            </Left>
            <Body>
              <Text>{orderDetail.address}</Text>
            </Body>
          </ListItem>
          <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
            <Left>
              <Text>メールアドレス</Text>
            </Left>
            <Body>
              <Text>{orderDetail.email}</Text>
            </Body>
          </ListItem>
          <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
            <Left>
              <Text>電話番号</Text>
            </Left>
            <Body>
              <Text>{orderDetail.phone}</Text>
            </Body>
          </ListItem>
          <ListItem noIndent style={{backgroundColor: '#cde1f9'}}>
            <Left>
              <Text>合計金額</Text>
            </Left>
            <Body>
              <Text>{orderDetail.price}</Text>
            </Body>
          </ListItem>
        </List>
        <Text>ご注文された商品</Text>
        <FlatList
          data={orderItems}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
        />
        <Button full onPress={() => nav.navigate('Home')}>
          <Text>Home</Text>
        </Button>
      </Content>
    </Container>
  );
};
export default CompleteScreen;
