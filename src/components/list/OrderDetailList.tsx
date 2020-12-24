import React from 'react';
import {Text, List, ListItem, Body, Left} from 'native-base';

const OrderDetailList = (prop: any) => {
  const orderDetail = prop.orderDetail;
  return (
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
    </List>
  );
};

export default OrderDetailList;
