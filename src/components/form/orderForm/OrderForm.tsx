/* eslint-disable react-native/no-inline-styles */
import React, {createContext} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Text, Button} from 'native-base';
import {TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import OrderApi from '../../../api/OrderApi';

// import InputMemberName from './textInput/InputMemberName';

export const FormContext = createContext({label: '', max: 0});

const OrderForm = () => {
  const {control, handleSubmit, errors} = useForm();
  const nav = useNavigation();

  const onSubmit = (data: any) =>
    OrderApi.saveOrderDetail('/api/member/order/save', data, nav);

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
            defaultValue="田中"
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
            defaultValue="太郎"
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
      {/* 電話番号 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 0.2, alignItems: 'flex-end'}}>
          <Text>電話番号</Text>
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
            name="phone"
            rules={{
              required: true,
              maxLength: 11,
              pattern: /[0-9]*/,
            }}
            defaultValue="0000000000"
          />
          {errors.phone && errors.phone.type === 'required' && (
            <Text style={{color: 'red'}}>電話番号は必須です。</Text>
          )}
          {errors.phone && errors.phone.type === 'maxLength' && (
            <Text style={{color: 'red'}}>
              電話番号は11文字以内で入力してください。
            </Text>
          )}
        </View>
      </View>
      {/* 住所 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 0.2, alignItems: 'flex-end'}}>
          <Text>住所</Text>
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
            name="address1"
            rules={{
              required: true,
              maxLength: 100,
            }}
            defaultValue="Kobe"
          />
          {errors.address1 && errors.address1.type === 'required' && (
            <Text style={{color: 'red'}}>住所は必須です。</Text>
          )}
          {errors.address1 && errors.address1.type === 'maxLength' && (
            <Text style={{color: 'red'}}>
              住所は100文字以内で入力してください。
            </Text>
          )}
        </View>
      </View>
      {/* 番地 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 0.2, alignItems: 'flex-end'}}>
          <Text>番地</Text>
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
            name="address2"
            rules={{
              required: true,
              maxLength: 100,
            }}
            defaultValue="00番地"
          />
          {errors.address2 && errors.address2.type === 'required' && (
            <Text style={{color: 'red'}}>番地は必須です。</Text>
          )}
          {errors.address2 && errors.address2.type === 'maxLength' && (
            <Text style={{color: 'red'}}>
              番地は100文字以内で入力してください。
            </Text>
          )}
        </View>
      </View>
      <View>
        <Button primary onPress={handleSubmit(onSubmit)}>
          <Text>注文する</Text>
        </Button>
      </View>
    </View>
  );
};

export default OrderForm;
