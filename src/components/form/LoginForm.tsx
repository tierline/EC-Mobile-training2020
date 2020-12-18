import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {FormData} from '../../interface/Interface';
import Member from '../../domain/Member';
import MemberApi from '../../api/MemberApi';

const LoginForm = () => {
  const {control, handleSubmit, errors} = useForm();
  const navigation = useNavigation();

  const navi = () => {
    navigation.navigate('Home');
  };

  const onSubmit = (formData: FormData) => {
    const member = new Member(formData.email, formData.password);
    MemberApi.login('/api/member/login', member, navi);
  };

  return (
    <View>
      <Text style={styles.label}>メールアドレス</Text>
      {errors.email && <Text style={styles.error}>正しく入力してください</Text>}
      <Controller
        control={control}
        render={({onChange, value}) => (
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        }}
        defaultValue="test@example.com"
      />

      <Text style={styles.label}>パスワード</Text>

      {errors.password && (
        <Text style={styles.error}>文字数が少なすぎます</Text>
      )}
      <Controller
        control={control}
        render={({onChange, value}) => (
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{required: true, minLength: 4}}
        defaultValue="test"
      />
      <View style={styles.button}>
        <Button title="ログイン" onPress={handleSubmit(onSubmit)} />
      </View>
      <View style={styles.button}>
        <Button
          title="新規登録画面へ"
          onPress={() => navigation.navigate('MemberApplicate')}
        />
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
  error: {
    color: 'red',
  },
});
export default LoginForm;
