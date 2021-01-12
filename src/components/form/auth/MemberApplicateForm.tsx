import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Form, Item, Input, Button } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import Member from '../../../domain/Member';
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
      <Text style={styles.label}>メールアドレス</Text>
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Item>
            <Input
              onChangeText={(emailValue) => onChange(emailValue)}
              value={value}
            />
          </Item>
        )}
        name="email"
        rules={{
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        }}
        defaultValue=""
      />
      {errors.email && <Text style={styles.error}>正しく入力してください</Text>}

      <Text style={styles.label}>パスワード</Text>

      {errors.password && (
        <Text style={styles.error}>文字数が少なすぎます</Text>
      )}
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <Item>
            <Input
              secureTextEntry={true}
              onChangeText={(passwordValue) => onChange(passwordValue)}
              value={value}
            />
          </Item>
        )}
        name="password"
        rules={{ required: true, minLength: 4 }}
        defaultValue=""
      />
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
