/* eslint-disable react-native/no-inline-styles */
import React, {createContext} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Text} from 'native-base';
import {TextInput, View, Button} from 'react-native';
import OrderAction from '../../../api/member/OrderAction';
import {useNavigation} from '@react-navigation/native';

// import InputMemberName from './textInput/InputMemberName';

export const FormContext = createContext({label: '', max: 0});

const OrderForm = () => {
  const {control, handleSubmit, errors} = useForm();
  const nav = useNavigation();

  const onSubmit = (data: any) =>
    OrderAction.save(data).then((res) => {
      nav.navigate('Complete', {
        orderId: res,
      });
    });

  return (
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <FormContext.Provider value={{label: 'name', max: 0}}>
    //     <InputMemberName />
    //   </FormContext.Provider>
    //   <Button title="注文を確定する" onPress={handleSubmit(onSubmit)} />
    // </View>

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* 姓 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 0.2, alignItems: 'flex-end'}}>
          <Text>姓</Text>
        </View>
        <View style={{flex: 0.8}}>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                  width: '80%',
                  fontSize: 20,
                  margin: '4%',
                }}
                placeholder=""
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="lastName"
            rules={{
              required: true,
              maxLength: 6,
            }}
            defaultValue="tanaka"
          />
          {errors.lastName && errors.lastName.type === 'required' && (
            <Text style={{color: 'red'}}>姓は必須です。</Text>
          )}
          {errors.lastName && errors.lastName.type === 'maxLength' && (
            <Text style={{color: 'red'}}>
              姓は６文字以内で入力してください。
            </Text>
          )}
        </View>
      </View>
      {/* 名 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 0.2, alignItems: 'flex-end'}}>
          <Text>名</Text>
        </View>
        <View style={{flex: 0.8}}>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                  width: '80%',
                  fontSize: 20,
                  margin: '4%',
                }}
                placeholder=""
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="firstName"
            rules={{
              required: true,
              maxLength: 6,
            }}
            defaultValue="taro"
          />
          {errors.firstName && errors.firstName.type === 'required' && (
            <Text style={{color: 'red'}}>名は必須です。</Text>
          )}
          {errors.firstName && errors.firstName.type === 'maxLength' && (
            <Text style={{color: 'red'}}>
              名は６文字以内で入力してください。
            </Text>
          )}
        </View>
      </View>
      {/* メールアドレス */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 0.2, alignItems: 'flex-end'}}>
          <Text>email</Text>
        </View>
        <View style={{flex: 0.8}}>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#ccc',
                  width: '80%',
                  fontSize: 20,
                  margin: '4%',
                }}
                placeholder=""
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="email"
            rules={{
              required: true,
              maxLength: 22,
              pattern: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
            }}
            defaultValue="test@example.com"
          />
          {errors.email && errors.email.type === 'required' && (
            <Text style={{color: 'red'}}>メールアドレスは必須です。</Text>
          )}
          {errors.email && errors.email.type === 'maxLength' && (
            <Text style={{color: 'red'}}>
              メールアドレスは22文字以内で入力してください。
            </Text>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <Text style={{color: 'red'}}>
              メールアドレスのフォーマットが不正です。
            </Text>
          )}
        </View>
      </View>

      <Button title="注文を確定する" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default OrderForm;
