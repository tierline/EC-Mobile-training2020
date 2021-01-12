import React, {useEffect, useState} from 'react';
import {Accordion} from 'native-base';
import Storage from '../../Storage';
import {useNavigation} from '@react-navigation/native';
import DailyOrderList from './DailyOrderList';
import Api from '../../api/Api';

const OrderList = () => {
  const navigation = useNavigation();
  const [items, setItem] = useState([]);

  //購入履歴の取得
  useEffect(() => {
    const email = {email: Storage.getEmail()};
    Api.post('/api/member/order/history', email, setItem);
  }, []);

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
