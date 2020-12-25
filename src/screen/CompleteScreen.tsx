import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Container, Content, Text, H1, H2} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import OrderedItemList from '../components/list/OrderedItemList';
import OrderApi from '../api/OrderApi';
import OrderDetailList from '../components/list/OrderDetailList';

const CompleteScreen = ({route}: any) => {
  const [orderDetail, setOrder]: any = useState([]);
  const nav = useNavigation();
  const {orderId} = route.params;

  useEffect(() => {
    let isMounted = true;
    OrderApi.fetchOrderDetails(
      '/api/member/order/orderDetails',
      orderId,
      setOrder,
      isMounted,
    );
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Content>
        <Content style={styles.h1content}>
          <H1>ご注文ありがとうございました。</H1>
        </Content>
        <OrderDetailList orderDetail={orderDetail} />
        <Content style={styles.h2content}>
          <H2>ご注文された商品</H2>
        </Content>
        <OrderedItemList orderId={orderId} />
        <View style={styles.totalPrice}>
          <Text style={styles.totalPriceH2}>合計金額{orderDetail.price}円</Text>
        </View>
      </Content>
      <Button full onPress={() => nav.navigate('Home')}>
        <Text>Home</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  h1content: {
    paddingTop: '2%',
  },
  h2content: {
    paddingTop: '4%',
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
});

export default CompleteScreen;
