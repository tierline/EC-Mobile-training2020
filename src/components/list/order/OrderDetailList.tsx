import React from 'react';
import { Text, List, ListItem, Body, Left } from 'native-base';

const OrderDetailList = (prop: { orderFormData: OrderFormData }) => {
  const orderFormData = prop.orderFormData;
  return (
    <List>
      <ListItem>
        <Left>
          <Text>お名前</Text>
        </Left>
        <Body>
          <Text>{orderFormData.lastName + orderFormData.firstName}様</Text>
        </Body>
      </ListItem>
      <ListItem>
        <Left>
          <Text>住所</Text>
        </Left>
        <Body>
          <Text>〒{orderFormData.postcode}</Text>
          <Text>
            {orderFormData.prefecture +
              orderFormData.city +
              orderFormData.block}
          </Text>
        </Body>
      </ListItem>
      <ListItem>
        <Left>
          <Text>メールアドレス</Text>
        </Left>
        <Body>
          <Text>{orderFormData.email}</Text>
        </Body>
      </ListItem>
      <ListItem>
        <Left>
          <Text>電話番号</Text>
        </Left>
        <Body>
          <Text>{orderFormData.phoneNumber}</Text>
        </Body>
      </ListItem>
    </List>
  );
};

export default OrderDetailList;
