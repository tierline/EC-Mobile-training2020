import React from 'react';
import {Content, Form, Input, Item, Label, Text} from 'native-base';
import {useForm, Controller} from 'react-hook-form'
import { TextInput } from 'react-native';
const AddressForm = () => {
  const {control, handleSubmit, errors} = useForm()
  return (
    <Content>
      <Form>
        <Label>名前</Label>
        <Item>
          <Input placeholder="岡本 太郎" />
        </Item>
        <Label>メールアドレス</Label>
        <Item>
          <Input placeholder="xxxxxx@example.com" />
        </Item>
        <Label>郵便番号</Label>
        <Item>
          <Input placeholder="xxxxxxx" />
        </Item>
        <Label>住所</Label>
        <Item>
          <Input placeholder="〇〇県〇〇町〇〇市〇〇" />
        </Item>
        <Label>電話番号</Label>
        <Item last>
          <Input placeholder="090xxxxxxxx" />
        </Item>
      </Form>
    </Content>
  );
};
export default AddressForm;
