import React, {useState} from 'react';
// import {Content, Label, Text} from 'native-base';
import LoginScreen from '../screen/LoginScreen';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {createMember, loginMember} from './Fetch';
import {useForm, Controller} from 'react-hook-form';

const LoginForm = () => {
  const {control, handleSubmit, errors} = useForm();

  return (
    <View>
      <Text style={styles.label}>メールアドレス</Text>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.email && <Text>必須項目です</Text>}

      <Text style={styles.label}>パスワード</Text>

      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.password && <Text>必須項目です</Text>}
      <View style={styles.button}>
        <Button title="新規登録" onPress={handleSubmit(createMember)} />
      </View>
      <View style={styles.button}>
        <Button title="ログイン" onPress={handleSubmit(loginMember)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  label: {
    marginLeft: 10,
  },
  input: {
    marginBottom: 20,
    marginRight: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'green',
  },
  form: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});
export default LoginForm;
