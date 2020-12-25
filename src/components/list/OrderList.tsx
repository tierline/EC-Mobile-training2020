import React, {useEffect, useState} from 'react';
import {Accordion} from 'native-base';
import OrderApi from '../../api/OrderApi';
import Storage from '../../Storage';
import {useNavigation} from '@react-navigation/native';
import DailyOrderList from './DailyOrderList';

const OrderList = () => {
  const navigation = useNavigation();
  const [items, setItem] = useState([]);
  useEffect(() => {
    const email = {email: Storage.getEmail()};
    OrderApi.fetchMemberId('/api/member/order/member_id', email, orderDate);
  }, []);

  const orderDate = (id: number) => {
    OrderApi.fetchOrder('/api/member/order/history', id, setItem);
  };

  const dataArray = () => {
    const list: any[] = [];
    items.forEach((item: any) => {
      const data = {
        title: `${item.orderMonth}月`,
        content: <DailyOrderList navi={navigation} items={item.orderDay} />,
      };
      list.push(data);
    });
    return list;
  };
  return <Accordion dataArray={dataArray()} expanded={0} />;
};

export default OrderList;
