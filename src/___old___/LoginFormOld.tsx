import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Form, Item, Input, Button } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import Member from '../../../domain/Member';
import FormController from './FormController';
import Api from '../../../api/Api';

const LoginForm = () => {
  const { control, handleSubmit, errors } = useForm();
  const navigation = useNavigation();

  const navi = () => {
    navigation.navigate('Home');
  };

  const onSubmit = (formData: MemberLoginFormData) => {
    const member = new Member(formData.email, formData.password);
    Api.auth('/api/member/login', member, navi);
  };

  return (
    <Form>
      <Text style={styles.label}>メールアドレス</Text>
      <FormController
        errors={errors}
        control={control}
        name={'email'}
        required={true}
        pattern={
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        }
        defaultValue={'test@example.com'}
        placeholder={'Eメール'}
      />
      {errors.email && <Text style={styles.error}>正しく入力してください</Text>}

      {/* <Controller
        control={control}
        render={({ onChange, value }) => (
          <Item>
            <Input
              placeholder="Eメール"
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          </Item>
        )}
        name="email"
        rules={{
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        }}
        defaultValue="test@example.com"
      />
      {errors.email && <Text style={styles.error}>正しく入力してください</Text>} */}

      <View style={styles.inputArea}>
        <Text style={styles.label}>パスワード</Text>
        <Controller
          control={control}
          render={({ onChange, value }) => (
            <Item>
              <Input
                placeholder="パスワード"
                secureTextEntry={true}
                onChangeText={(passwordValue) => onChange(passwordValue)}
                value={value}
              />
            </Item>
          )}
          name="password"
          rules={{ required: true, minLength: 4 }}
          defaultValue="test"
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
          onPress={handleSubmit(onSubmit)}
          style={styles.button}>
          <Text>ログイン</Text>
        </Button>
        <Button
          rounded
          block
          style={styles.button}
          onPress={() => navigation.navigate('MemberApplicate')}>
          <Text>新規登録画面へ</Text>
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
export default LoginForm;
