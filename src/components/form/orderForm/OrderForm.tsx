/* eslint-disable react-native/no-inline-styles */
import React, {createContext, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Text, Button} from 'native-base';
import {StyleSheet, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import OrderApi from '../../../api/OrderApi';
import MemberApi from '../../../api/MemberApi';
import Storage from '../../../Storage';

export const FormContext = createContext({label: '', max: 0});

const OrderForm = () => {
  const {control, handleSubmit, errors, reset} = useForm();
  const nav = useNavigation();
  useEffect(() => {
    const email = {email: Storage.getEmail()};
    MemberApi.addressAcquisition('/api/member/order/address', email, reset);
  }, []);

  const onSubmit = (data: any) =>
    OrderApi.saveOrderDetail('/api/member/order/save', data, nav);

  return (
    //コンポーネントを作る
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
                style={styles.input}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            defaultValue=""
            name="lastName"
            rules={{
              required: true,
              maxLength: 6,
            }}
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
            defaultValue=""
            name="firstName"
            rules={{
              required: true,
              maxLength: 6,
            }}
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
            defaultValue=""
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
              maxLength: 100,
              pattern: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
            }}
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
            defaultValue=""
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
            name="phoneNumber"
            rules={{
              required: true,
              maxLength: 13,
              pattern: /[0-9]*/,
            }}
          />
          {errors.phoneNumber && errors.phoneNumber.type === 'required' && (
            <Text style={{color: 'red'}}>電話番号は必須です。</Text>
          )}
          {errors.phoneNumber && errors.phoneNumber.type === 'maxLength' && (
            <Text style={{color: 'red'}}>
              電話番号は13文字以内で入力してください。
            </Text>
          )}
        </View>
      </View>
      {/* 郵便番号 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 0.2, alignItems: 'flex-end'}}>
          <Text>郵便番号</Text>
        </View>
        <View style={{flex: 0.8}}>
          <Controller
            control={control}
            defaultValue=""
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
            name="postcode"
            rules={{
              required: true,
              maxLength: 8,
            }}
          />
          {errors.postcode && errors.postcode.type === 'required' && (
            <Text style={{color: 'red'}}>郵便番号</Text>
          )}
          {errors.postcode && errors.postcode.type === 'maxLength' && (
            <Text style={{color: 'red'}}>
              郵便番号はは8文字以内で入力してください。
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
          <Text>都道府県</Text>
        </View>
        <View style={{flex: 0.8}}>
          <Controller
            control={control}
            defaultValue=""
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={styles.input}
                placeholder=""
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="prefecture"
            rules={{
              required: true,
              maxLength: 100,
            }}
          />
          {errors.prefecture && errors.prefecture.type === 'required' && (
            <Text style={{color: 'red'}}>住所は必須です。</Text>
          )}
          {errors.prefecture && errors.prefecture.type === 'maxLength' && (
            <Text style={{color: 'red'}}>
              住所は100文字以内で入力してください。
            </Text>
          )}
        </View>
      </View>
      {/* 市区町村 */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 0.2, alignItems: 'flex-end'}}>
          <Text>市区町村</Text>
        </View>
        <View style={{flex: 0.8}}>
          <Controller
            control={control}
            defaultValue=""
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={styles.input}
                placeholder=""
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="city"
            rules={{
              required: true,
              maxLength: 100,
            }}
          />
          {errors.city && errors.city.type === 'required' && (
            <Text style={{color: 'red'}}>住所は必須です。</Text>
          )}
          {errors.city && errors.city.type === 'maxLength' && (
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
                style={styles.input}
                placeholder=""
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            defaultValue=""
            name="block"
            rules={{
              required: true,
              maxLength: 100,
            }}
          />
          {errors.block && errors.block.type === 'required' && (
            <Text style={{color: 'red'}}>番地は必須です。</Text>
          )}
          {errors.block && errors.block.type === 'maxLength' && (
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

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '80%',
    fontSize: 20,
    margin: '4%',
  },
});
export default OrderForm;
