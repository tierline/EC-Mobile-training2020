import React, {useEffect, useState} from 'react';
import {Button, Container, Content, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import OrderAction from '../api/member/OrderAction';

const CompleteScreen = (route: any) => {
  const navigation = useNavigation();
  const {orderId} = route.params;
  const [items, setItems] = useState([]);

  useEffect(() => {
    OrderAction.fetch(orderId).then((orderDetails) => {
      setItems(orderDetails);
    });
  }, [orderId]);

  return (
    <Container>
      <Content>
        <Text>注文完了</Text>
        <Text>注文番号{orderId}</Text>
        <Text>{items}</Text>
      </Content>
      <Content />
      <Button full onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </Button>
    </Container>
  );
};
export default CompleteScreen;
