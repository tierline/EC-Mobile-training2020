import React from 'react';
import { StyleSheet } from 'react-native';
import { Form, View } from 'native-base';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import Member from '../../../domain/Member';
import SimpleInput from '../../input/SimpleInput';
import SimpleButton from '../../button/SimpleButton';
import Api from '../../../api/Api';

const LoginForm = () => {
  const { control, handleSubmit, errors } = useForm();
  const navigation = useNavigation();

  const navi = () => {
    navigation.navigate('Home');
  };

  const onSubmit = (formData: MemberLoginFormData) => {
    const member = new Member(formData.email, formData.password);
    Api.auth('/api/member/login', member, navi, 'login');
  };

  return (
    <Form>
      <SimpleInput
        label={'Eメールアドレス'}
        errors={errors}
        errorMessage={'正しく入力してください'}
        control={control}
        name={'email'}
        rules={{
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        }}
        secureTextEntry={false}
        defaultValue={'test@example.com'}
        placeholder={'Eメールを入力してください'}
      />

      <View style={styles.inputArea}>
        <SimpleInput
          label={'パスワード'}
          errors={errors}
          errorMessage={'文字数が少なすぎます'}
          control={control}
          name={'password'}
          rules={{
            required: true,
            minLength: 4,
          }}
          secureTextEntry={true}
          defaultValue={'test'}
          placeholder={'パスワードを入力してください'}
        />
      </View>

      <View style={styles.buttonArea}>
        <SimpleButton text={'ログイン'} onPress={handleSubmit(onSubmit)} />
        <SimpleButton
          text={'新規登録画面へ'}
          onPress={() => navigation.navigate('MemberApplicate')}
        />
      </View>
    </Form>
  );
};
const styles = StyleSheet.create({
  inputArea: {
    paddingTop: 20,
  },
  buttonArea: {
    paddingTop: 20,
  },
});
export default LoginForm;
