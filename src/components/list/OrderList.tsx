import React, {useEffect, useState} from 'react';
import {Accordion} from 'native-base';
import OrderApi from '../../api/OrderApi';
import Storage from '../../Storage';
import {useNavigation} from '@react-navigation/native';
import DailyOrderList from './DailyOrderList';
import MemberApi from '../../api/MemberApi';

const OrderList = () => {
  const navigation = useNavigation();
  const [items, setItem] = useState([]);
  useEffect(() => {
    const email = {email: Storage.getEmail()};
    MemberApi.fetchMemberId('/api/member/order/member_id', email, orderDate);
  }, []);

  const orderDate = (id: number) => {
    OrderApi.fetchOrder('/api/member/order/history', id, setItem);
  };

  const dataArray = () => {
    const list: any[] = [];
    for (let key in items) {
      const data = {
        title: `${key}月`,
        content: <DailyOrderList navi={navigation} items={items[key]} />,
      };
      list.push(data);
    }
    return list;
  };
  return <Accordion dataArray={dataArray()} expanded={0} />;
};

export default OrderList;
