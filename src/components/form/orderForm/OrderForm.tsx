import React from 'react';
import { Content, Form, Input, Item, Label, Text, View } from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import { StyleSheet, TextInput, Button } from 'react-native';
import OrderAction from '../../../api/member/OrderAction'
import { OrderFormData } from '../../../interface/Interface'
import FirstNameInput from './textInput/FirstNameInput'

const OrderForm = () => {
  const { control, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: OrderFormData) => OrderAction.save(data);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <FirstNameInput />
      <View
        style={styles.view}>
        <View style={{ flex: 0.2, alignItems: 'flex-end' }}>
          <Text>郵便番号</Text>
        </View>
        <View style={{ flex: 0.8 }}>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                style={styles.textInput}
                placeholder="000-0000"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="zipCode"
            rules={{
              pattern: /^\d{3}-\d{4}$/,
            }}
            defaultValue=""
          />
          {errors.zipCode && errors.zipCode.type === 'pattern' && (
            <Text style={{ color: 'red' }}>
              郵便番号のフォーマットが不正です。
            </Text>
          )}
        </View>
      </View>
      <Button title="注文を確定する" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '80%',
    fontSize: 20,
    margin: '4%',
  }
});

export default OrderForm;
