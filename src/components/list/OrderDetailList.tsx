import React from 'react';
import {Text, List, ListItem, Body, Left} from 'native-base';

const OrderDetailList = (prop: any) => {
  const orderDetail = prop.orderDetail;
  return (
    <List>
      <ListItem>
        <Left>
          <Text>お名前</Text>
        </Left>
        <Body>
          <Text>{orderDetail.lastName + orderDetail.firstName}様</Text>
        </Body>
      </ListItem>
      <ListItem>
        <Left>
          <Text>住所</Text>
        </Left>
        <Body>
          <Text>{orderDetail.postcode}</Text>
          <Text>
            {orderDetail.prefecture + orderDetail.city + orderDetail.block}
          </Text>
        </Body>
      </ListItem>
      <ListItem>
        <Left>
          <Text>メールアドレス</Text>
        </Left>
        <Body>
          <Text>{orderDetail.email}</Text>
        </Body>
      </ListItem>
      <ListItem>
        <Left>
          <Text>電話番号</Text>
        </Left>
        <Body>
          <Text>{orderDetail.phoneNumber}</Text>
        </Body>
      </ListItem>
    </List>
  );
};

export default OrderDetailList;
