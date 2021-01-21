import React, { useEffect, useState } from 'react';
import { Accordion } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import DailyOrderList from './DailyOrderList';
import Api from '../../../api/Api';

const OrderList = () => {
  const navigation = useNavigation();
  const [orderHistory, setOrderHistory] = useState([]);
  useEffect(() => {
    Api.get('/api/member/order/history', setOrderHistory);
  }, []);

  const dataArray = (): any => {
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
