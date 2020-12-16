import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { applicateMember } from '../../api/member/Applicate';
import { FormData } from '../../interface/Interface';

const LoginForm = () => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (formData: FormData) =>
    applicateMember('/api/member/login', formData, navigation);
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.label}>メールアドレス</Text>
      {errors.email && <Text style={styles.error}>必須項目です</Text>}
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />

      <Text style={styles.label}>パスワード</Text>

      {errors.password && <Text style={styles.error}>必須項目です</Text>}
      <Controller
        control={control}
        render={({ onChange, value }) => (
          <TextInput
            style={styles.input}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      <View style={styles.button}>
        <Button title="ログイン" onPress={handleSubmit(onSubmit)} />
      </View>
      <View style={styles.button}>
        <Button
          title="新規登録画面へ"
          onPress={() => navigation.navigate('Applicate')}
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
