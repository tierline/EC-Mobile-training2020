import React, { useEffect, useState } from 'react';
import { Accordion } from 'native-base';
import Storage from '../../../Storage';
import { useNavigation } from '@react-navigation/native';
import DailyOrderList from './DailyOrderList';
import Api from '../../../api/Api';

const OrderList = () => {
  const navigation = useNavigation();
  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    const email = { email: Storage.getEmail() };
    Api.post('/api/member/order/history', email, setOrderHistory);
  }, []);

  //androidだとこの部分で
  //VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.
  //iosだと出ない
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
  return (
    <Accordion
      dataArray={dataArray()}
      icon="add"
      expandedIcon="remove"
      iconStyle={{ color: 'green' }}
      expandedIconStyle={{ color: 'red' }}
    />
  );
};

export default OrderList;
