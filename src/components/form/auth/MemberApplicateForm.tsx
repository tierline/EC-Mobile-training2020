import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Form, Button } from 'native-base';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import Member from '../../../domain/Member';
import FormController from './FormController';
import Api from '../../../api/Api';

const MemberApplicateForm = () => {
  const { control, handleSubmit, errors } = useForm();
  const navigation = useNavigation();

  const navi = () => {
    navigation.navigate('Home');
  };

  const onSubmit = (formData: MemberApplicateFormData) => {
    const member = new Member(formData.email, formData.password);
    Api.auth('/api/member/applicate', member, navi);
  };

  return (
    <Form>
      <Text style={styles.label}>Eメールアドレス</Text>
      <FormController
        control={control}
        name={'email'}
        rules={{
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        }}
        secureTextEntry={false}
        defaultValue={''}
        placeholder={'Eメール'}
      />
      {errors.email && <Text style={styles.error}>正しく入力してください</Text>}

      <View style={styles.inputArea}>
        <Text style={styles.label}>パスワード</Text>
        <FormController
          control={control}
          name={'password'}
          rules={{ required: true, minLength: 4 }}
          secureTextEntry={true}
          defaultValue={''}
          placeholder={'パスワード'}
        />
        {errors.password && (
          <Text style={styles.error}>文字数が少なすぎます</Text>
        )}
      </View>

      <View style={styles.buttonArea}>
        <Button
          success
          rounded
          block
          style={styles.button}
          onPress={handleSubmit(onSubmit)}>
          <Text>新規登録</Text>
        </Button>
        <Button
          rounded
          block
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text>ログイン画面へ</Text>
        </Button>
      </View>
    </Form>
  );
};
const styles = StyleSheet.create({
  label: {
    marginLeft: 10,
  },
  form: {
    marginBottom: 20,
  },
  inputArea: {
    paddingTop: 20,
  },
  buttonArea: {
    paddingTop: 20,
  },
  button: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  error: {
    color: 'red',
    marginLeft: 20,
  },
});
export default MemberApplicateForm;
