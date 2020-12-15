import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {applicateMember} from '../../api/members/Applicate';
import {FormData} from '../../interface/Interface';

const ApplicateForm = () => {
  const {control, handleSubmit, errors} = useForm();
  const navigation = useNavigation();
  const onSubmit = (formData: FormData) =>
    applicateMember('/api/members/auth/applicate', formData, navigation);

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
        defaultValue="abc@example.com"
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
        defaultValue="1234"
      />
      <View style={styles.button}>
        <Button title="新規登録" onPress={handleSubmit(onSubmit)} />
      </View>
      <View style={styles.button}>
        <Button
          title="ログイン画面へ"
          onPress={() => navigation.navigate('Login')}
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
    borderBottomColor: 'red',
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
export default ApplicateForm;
