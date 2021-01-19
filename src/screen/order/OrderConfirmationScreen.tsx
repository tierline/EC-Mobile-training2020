import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import OrderedItemList from '../../components/list/order/OrderedItemList';
import OrderDetailList from '../../components/list/order/OrderDetailList';
import Api from '../../api/Api';
import LargeButton from '../../components/button/LargeButton';

// お届け先の表示順
// お届け先と注文商品の間のスペース
// 単価の合計金額
// 全体の合計金額を大きくする
// 消費税も考慮する
const OrderConfirmationScreen = ({ route }: RouteForOrderFormData) => {
  const navigation = useNavigation();
  const orderFormData = route.params.orderFormData;
  const [cartItem, setOrderItems] = useState();
  const [totalAmount, setTotalAmount] = useState();

  const callBack = (response: any) => {
    setOrderItems(response.items);
    setTotalAmount(response.totalAmount);
  };

  useEffect(() => {
    Api.get('/api/member/cart/', callBack);
  }, []);

  const navi = (orderId: { orderId: number }) => {
    navigation.navigate('Complete', orderId);
  };

  const onSubmit = () => {
    Api.post('/api/member/order/save', orderFormData, navi);
  };
  return (
    <Container style={styles.container}>
      <View style={styles.order}>
        <Text style={styles.orderItemText}>お届け先</Text>
        <OrderDetailList orderFormData={orderFormData} />
      </View>
      <View style={styles.orderItem}>
        <Text style={styles.orderItemText}>注文商品</Text>
        <OrderedItemList cartItem={cartItem} />
        <View style={styles.totalPrice}>
          <Text>合計金額{totalAmount}円</Text>
        </View>
        <LargeButton text={'注文する'} onPress={onSubmit} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  order: {
    flex: 1,
  },
  orderItem: {
    flex: 1.2,
  },
  orderItemText: {
    fontSize: 20,
    marginLeft: '5%',
  },
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
    padding: 5,
  },
});

export default OrderConfirmationScreen;
