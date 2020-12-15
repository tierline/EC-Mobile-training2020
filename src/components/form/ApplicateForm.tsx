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
        rules={{required: true}}
        defaultValue=""
      />
      {errors.email && <Text>必須項目です</Text>}

      <Text style={styles.label}>パスワード</Text>

      <Controller
        control={control}
        render={({onChange, value}) => (
          <TextInput
            style={styles.input}
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
});
export default ApplicateForm;
