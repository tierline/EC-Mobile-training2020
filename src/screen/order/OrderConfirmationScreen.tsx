import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, H1, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import OrderItemList from '../../components/list/order/OrderItemList';
import OrderDetailList from '../../components/list/order/OrderDetailList';
import Api from '../../api/Api';
import LargeButton from '../../components/button/LargeButton';

// TOREVIEW
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

  const callBack = (response: any): void => {
    setOrderItems(response.items);
    setTotalAmount(response.totalAmount);
  };

  useEffect(() => {
    Api.get('/api/member/cart/', callBack);
  }, []);

  const navi = (orderId: number): void => {
    navigation.navigate('Complete', { orderId: orderId });
  };

  const onSubmit = (): void => {
    Api.post('/api/member/order/save', orderFormData, navi);
  };
  return (
    <Container>
      <Content>
        <View>
          <View style={styles.heading}>
            <H1 style={styles.headerText}>お届け先</H1>
          </View>
          <View style={styles.orderDetailListArea}>
            <OrderDetailList orderFormData={orderFormData} />
          </View>
        </View>
        <View>
          <View style={styles.heading}>
            <H1 style={styles.headerText}>注文商品</H1>
          </View>
          <OrderItemList cartItem={cartItem} />
          <View style={styles.totalAmountArea}>
            <Text style={styles.totalAmount}>合計金額{totalAmount}円</Text>
          </View>
          <LargeButton text={'注文する'} onPress={onSubmit} />
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  heading: {
    paddingTop: 20,
  },
  headerText: {
    marginLeft: 15,
  },
  orderDetailListArea: {
    paddingTop: 14,
  },
  totalAmountArea: {
    padding: 8,
    backgroundColor: '#eee',
  },
  totalAmount: {
    fontSize: 26,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default OrderConfirmationScreen;
