import React, { useEffect, useState } from 'react';
import {
  Card,
  CardItem,
  Text,
  Right,
  H3,
  View,
  Left,
  Button,
} from 'native-base';
import { FlatList, Image, StyleSheet } from 'react-native';
import UrlApi from '../../../api/UrlApi';
import { flashMessage } from '../../flashMessage/FlashMessage';
import { useNavigation } from '@react-navigation/native';
import Api from '../../../api/Api';
import { CartItem } from '../../../domain/CartItem';
import LargeButton from '../../../components/button/LargeButton';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/FontAwesome';

// TOREVIEW : リストもコンポーネントに切り出したい
const CartItemList = () => {
  const navigation = useNavigation();
  const [cartItems, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const navi = () => {
    navigation.navigate('OrderForm');
  };

  const callBack = (res: any) => {
    setTotalAmount(res.totalAmount);
    setItems(res.items);
  };

  useEffect(() => {
    Api.get('/api/member/cart/', callBack);
  }, [count]);

  const removeParticularProduct = async (
    productId: number,
    productName: string,
  ) => {
    await Api.post(`/api/member/cart/remove/${productId}`, setItems);
    flashMessage(productName, '削除しました', 500, 'red');
    setCount(count + 1);
  };

  //   // clean up関数(必要になったら追加する)
  // useEffect(() => {
  //   // let mounted = true;
  //   Api.get('/api/member/cart/list', setItems);
  // return () => {
  //   mounted = false;
  // };
  // }, [cartItems]);  const [orderedItems, setOrderedItem] = useState([]);

  const renderItem = ({ item }: { item: CartItem }) => {
    const func = async (productId: number, quantity: number) => {
      await Api.post(
        `/api/member/cart/changeQuantity/${productId}/${quantity}`,
      );
      setCount(count + 1);
    };
    return (
      <Card>
        <CardItem header bordered>
          <Left>
            <H3 style={styles.headerText}>
              {item.productName} {item.productPrice}円
            </H3>
          </Left>
          <Right>
            <Button
              danger
              small
              style={styles.button}
              onPress={() =>
                removeParticularProduct(item.productId, item.productName)
              }>
              <Icon name="remove" size={20} style={styles.icon} />
            </Button>
          </Right>
        </CardItem>
        <CardItem>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{ uri: UrlApi.image(item.productImage) }}
          />
          <Right>
            <View>
              <View>
                <Text>数量</Text>
              </View>
              <NumericInput
                minValue={1}
                maxValue={30}
                rounded
                onChange={(quantity: number) => func(item.productId, quantity)}
                initValue={item.quantity}
                totalWidth={90}
                editable={false}
              />
            </View>
          </Right>
        </CardItem>
      </Card>
    );
  };

  return cartItems.length > 0 ? (
    <View style={styles.body}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.totalAmountArea}>
        <Text style={styles.totalAmount}>合計金額{totalAmount}円</Text>
      </View>
      <LargeButton text={'注文処理へ進む'} onPress={navi} />
    </View>
  ) : (
    <View style={styles.body}>
      <H3>カートに商品がありません</H3>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'stretch',
    width: 120,
    height: 120,
  },
  body: {
    flex: 8,
  },
  button: {
    padding: 5,
  },
  icon: {
    color: '#fff',
    height: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonArea: {
    paddingTop: 20,
  },
  totalAmountArea: {
    padding: 12,
  },
  totalAmount: {
    fontSize: 26,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default CartItemList;
