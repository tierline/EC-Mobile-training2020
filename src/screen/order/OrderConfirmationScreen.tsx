import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, H1, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import OrderItemList from '../../components/list/order/OrderItemList';
import OrderDetailList from '../../components/list/order/OrderDetailList';
import Api from '../../api/Api';
import LargeButton from '../../components/button/LargeButton';

/**
 * 注文内容確認画面
 *
 * @param param
 */
const OrderConfirmationScreen = ({ route }: RouteForOrderFormData) => {
  const navigation = useNavigation();
  const orderFormData = route.params.orderFormData;
  const [cartItem, setOrderItems] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const callBack = (response: any): void => {
    setOrderItems(response.items);
    setTotalPrice(response.totalPrice);
  };

  useEffect(() => {
    Api.get('/api/member/cart/', callBack);
  }, []);

  const navi = (order: number): void => {
    navigation.navigate('Complete', { order: order });
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
          <View style={styles.totalPriceArea}>
            <Text style={styles.totalPrice}>合計金額{totalPrice}円</Text>
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
  totalPriceArea: {
    padding: 8,
    backgroundColor: '#eee',
  },
  totalPrice: {
    fontSize: 26,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default OrderConfirmationScreen;
