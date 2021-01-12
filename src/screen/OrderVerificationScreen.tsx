import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Container, Content, Text, H1, H2, Body } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import OrderedItemList from '../components/list/OrderedItemList';
import OrderDetailList from '../components/list/OrderDetailList';
import CartApi from '../api/CartApi';
import Api from '../api/Api';

const OrderVerificationScreen = ({ route }: RouteForOrderFormData) => {
  const navigation = useNavigation();
  const orderFormData = route.params.orderFormData;
  const [cartItem, setOrderItems] = useState();
  const [totalAmount, setTotalAmount] = useState();
  useEffect(() => {
    let mounted = true;
    CartApi.fetchCartItems(
      '/api/member/cart/list',
      setOrderItems,
      mounted,
      setTotalAmount,
    );
    return () => {
      mounted = false;
    };
  }, []);

  const navi = (id: { orderId: number }) => {
    navigation.navigate('Complete', id);
  };

  const onSubmit = () => {
    Api.post('/api/member/order/save', orderFormData, navi);
  };
  return (
    <Container>
      <Content>
        <Content style={styles.h1content}>
          <H1>お届け先情報</H1>
        </Content>
        <OrderDetailList orderFormData={orderFormData} />
        <Content style={styles.h2content}>
          <H2>注文商品</H2>
        </Content>
        <OrderedItemList cartItem={cartItem} />
        <View style={styles.totalPrice}>
          <Text style={styles.totalPriceH2}>合計金額{totalAmount}円</Text>
        </View>
        <View>
          <Body style={styles.button}>
            <Button onPress={() => onSubmit()}>
              <Text>注文する</Text>
            </Button>
          </Body>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  h1content: {
    paddingTop: '2%',
    paddingLeft: '5%',
  },
  h2content: {
    paddingTop: '4%',
    paddingLeft: '5%',
  },
  totalPrice: {
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 25,
  },
  totalPriceH2: {
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
    marginBottom: '5%',
  },
});

export default OrderVerificationScreen;
