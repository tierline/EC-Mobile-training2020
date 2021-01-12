import React, {useEffect, useState} from 'react';
import {Accordion} from 'native-base';
import OrderApi from '../../api/OrderApi';
import Storage from '../../Storage';
import {useNavigation} from '@react-navigation/native';
import DailyOrderList from './DailyOrderList';
import MemberApi from '../../api/MemberApi';

const OrderList = () => {
  const navigation = useNavigation();
  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    const email = {email: Storage.getEmail()};
    MemberApi.fetchMemberAddress(
      '/api/member/order/member_id',
      email,
      orderDate,
    );
  }, []);

  const orderDate = (id: number) => {
    OrderApi.fetchOrder('/api/member/order/history', id, setOrderHistory);
  };

  const dataArray = () => {
    const list = [];
    for (let key in orderHistory) {
      const data = {
        title: `${key}月`,
        content: (
          <DailyOrderList navi={navigation} orderHistory={orderHistory[key]} />
        ),
      };
      list.push(data);
    }
    return list;
  };
  return <Accordion dataArray={dataArray()} expanded={0} />;
};

export default OrderList;
