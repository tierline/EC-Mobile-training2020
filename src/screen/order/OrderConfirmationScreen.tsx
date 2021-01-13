import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Container, Content, Text, H1, H2 } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import OrderedItemList from '../../components/list/order/OrderedItemList';
import OrderDetailList from '../../components/list/order/OrderDetailList';
import Api from '../../api/Api';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrderConfirmationScreen = ({ route }: RouteForOrderFormData) => {
  const navigation = useNavigation();
  const orderFormData = route.params.orderFormData;
  const [cartItem, setOrderItems] = useState();
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    let mounted = true;
    Api.get('/api/member/cart/list', setOrderItems, mounted, setTotalAmount);
    return () => {
      mounted = false;
    };
  }, []);

  const navi = (orderId: { orderId: number }) => {
    navigation.navigate('Complete', orderId);
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
        <SafeAreaView>
          <OrderedItemList cartItem={cartItem} />
        </SafeAreaView>
        <View style={styles.totalPrice}>
          <Text style={styles.totalPriceH2}>合計金額{totalAmount}円</Text>
        </View>
      </Content>
      <Button full large onPress={() => onSubmit()}>
        <Text>注文する</Text>
      </Button>
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
});

export default OrderConfirmationScreen;
