import React, { createContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Api from '../../api/Api';
import LargeButton from '../button/LargeButton';
import SimpleInput from '../input/SimpleInput';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FormContext = createContext({ label: '', max: 0 });

const OrderForm = () => {
  const { control, handleSubmit, errors, reset } = useForm();
  const navigation = useNavigation();

  useEffect(() => {
    Api.get('/api/member/session', reset);
  }, [reset]);

  const onSubmit = (data: OrderFormData): void => {
    navigation.navigate('OrderConfirmation', {
      orderFormData: data,
    });
  };

  // TOREVIEW :
  return (
    <Form style={styles.form}>
      {/* 姓 */}
      <View style={styles.input}>
        <View style={styles.inputHeading}>
          <Text>姓</Text>
        </View>
        <View style={styles.inputBody}>
          <SimpleInput
            label={''}
            errors={errors}
            errorType={[
              { type: 'required', errorMessage: '入力は必須です' },
              { type: 'maxLength', errorMessage: '姓が長すぎます' },
            ]}
            control={control}
            name={'lastName'}
            rules={{
              required: true,
              maxLength: 12,
            }}
            secureTextEntry={false}
            defaultValue={''}
            placeholder={''}
          />
        </View>
      </View>

      {/* 名 */}
      <View style={styles.input}>
        <View style={styles.inputHeading}>
          <Text>名</Text>
        </View>
        <View style={styles.inputBody}>
          <SimpleInput
            label={''}
            errors={errors}
            errorType={[
              { type: 'required', errorMessage: '入力は必須です' },
              { type: 'maxLength', errorMessage: '名が長すぎます' },
            ]}
            control={control}
            name={'firstName'}
            rules={{
              required: true,
              maxLength: 12,
            }}
            secureTextEntry={false}
            defaultValue={''}
            placeholder={''}
          />
        </View>
      </View>

      {/* メールアドレス */}
      <View style={styles.input}>
        <View style={styles.inputHeading}>
          <Icon name="envelope-o" size={20} />
        </View>
        <View style={styles.inputBody}>
          <SimpleInput
            label={''}
            errors={errors}
            errorType={[
              { type: 'required', errorMessage: '入力は必須です' },
              {
                type: 'maxLength',
                errorMessage: 'メールアドレスが長すぎます',
              },
              {
                type: 'pattern',
                errorMessage: 'Eメールの形式が間違っています',
              },
            ]}
            control={control}
            name={'email'}
            rules={{
              required: true,
              maxLength: 254,
              pattern: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
            }}
            secureTextEntry={false}
            defaultValue={''}
            placeholder={''}
          />
        </View>
      </View>

      {/* 電話番号 */}
      <View style={styles.input}>
        <View style={styles.inputHeading}>
          <Icon name="phone" size={22} />
        </View>
        <View style={styles.inputBody}>
          <SimpleInput
            label={''}
            errors={errors}
            errorType={[
              { type: 'required', errorMessage: '入力は必須です' },
              {
                type: 'maxLength',
                errorMessage: '電話番号は13文字以内で入力してください。',
              },
              {
                type: 'pattern',
                errorMessage: '電話番号は半角英数字で入力してください',
              },
            ]}
            control={control}
            name={'phoneNumber'}
            rules={{
              required: true,
              maxLength: 13,
              pattern: /^[0-9]*$/,
            }}
            secureTextEntry={false}
            defaultValue={''}
            placeholder={''}
          />
        </View>
      </View>

      {/* 郵便番号 */}
      <View style={styles.input}>
        <View style={styles.inputHeading}>
          <Text style={styles.postcode}>〒</Text>
        </View>
        <View style={styles.inputBody}>
          <SimpleInput
            label={''}
            errors={errors}
            errorType={[
              { type: 'required', errorMessage: '入力は必須です' },
              {
                type: 'maxLength',
                errorMessage: '郵便番号は8文字以内で入力してください。',
              },
              {
                type: 'pattern',
                errorMessage:
                  '郵便番号はハイフンなしの半角英数字で入力してください。',
              },
            ]}
            control={control}
            name={'postcode'}
            rules={{
              required: true,
              maxLength: 8,
              pattern: /^[0-9]*$/,
            }}
            secureTextEntry={false}
            defaultValue={''}
            placeholder={''}
          />
        </View>
      </View>

      {/* 住所 */}
      <View style={styles.input}>
        <View style={styles.inputHeading}>
          <Text>都道府県</Text>
        </View>
        <View style={styles.inputBody}>
          <SimpleInput
            label={''}
            errors={errors}
            errorType={[
              { type: 'required', errorMessage: '入力は必須です' },
              {
                type: 'maxLength',
                errorMessage: '都道府県名は4文字以内で入力してください',
              },
            ]}
            control={control}
            name={'prefecture'}
            rules={{
              required: true,
              maxLength: 4,
            }}
            secureTextEntry={false}
            defaultValue={''}
            placeholder={''}
          />
        </View>
      </View>

      {/* 市区町村 */}
      <View style={styles.input}>
        <View style={styles.inputHeading}>
          <Text>市区町村</Text>
        </View>
        <View style={styles.inputBody}>
          <SimpleInput
            label={''}
            errors={errors}
            errorType={[
              { type: 'required', errorMessage: '入力は必須です' },
              {
                type: 'maxLength',
                errorMessage: '市区町村名は256文字以内で入力してください',
              },
            ]}
            control={control}
            name={'city'}
            rules={{
              required: true,
              maxLength: 256,
            }}
            secureTextEntry={false}
            defaultValue={''}
            placeholder={''}
          />
        </View>
      </View>

      {/* 番地 */}
      <View style={styles.input}>
        <View style={styles.inputHeading}>
          <Text>番地</Text>
        </View>
        <View style={styles.inputBody}>
          <SimpleInput
            label={''}
            errors={errors}
            errorType={[
              { type: 'required', errorMessage: '入力は必須です' },
              {
                type: 'maxLength',
                errorMessage: '番地は256文字以内で入力してください',
              },
            ]}
            control={control}
            name={'block'}
            rules={{
              required: true,
              maxLength: 256,
            }}
            secureTextEntry={false}
            defaultValue={''}
            placeholder={''}
          />
        </View>
      </View>

      {/* 会員ID（画面には表示しない） */}
      <View style={styles.memberId}>
        <SimpleInput
          label={''}
          errors={errors}
          errorType={[]}
          control={control}
          name={'memberId'}
          rules={{}}
          secureTextEntry={false}
          defaultValue={''}
          placeholder={''}
        />
      </View>

      <View style={styles.button}>
        <LargeButton text={'注文確認画面へ'} onPress={handleSubmit(onSubmit)} />
      </View>
    </Form>
  );
};

const styles = StyleSheet.create({
  form: {
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postcode: {
    fontSize: 22,
  },
  inputHeading: { flex: 2, alignItems: 'flex-end' },
  inputBody: { flex: 8 },
  memberId: {
    display: 'none',
  },
  button: {
    paddingTop: 50,
  },
});

export default OrderForm;
