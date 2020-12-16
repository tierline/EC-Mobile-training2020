import React from 'react';
import { Content, Form, Input, Item, Label, Text, Button } from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { TextInput } from 'react-native';
import OrderAction from '../../api/member/OrderAction'

const OrderForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example"));

  return (
    <Content>
      <Form>
        <form onSubmit={handleSubmit(onSubmit)}></form>
        <Label>名前</Label>
        <Input placeholder="岡本 太郎" />
      </Form>
      <Button onPress={() => OrderAction.save()}>
        <Text>注文を確定する</Text>
      </Button>
    </Content >
  );
};
export default OrderForm;
