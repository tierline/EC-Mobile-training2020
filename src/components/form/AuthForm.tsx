import React from 'react';
import { StyleSheet } from 'react-native';
import { Form, View } from 'native-base';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import Member from '../../domain/Member';
import SimpleInput from '../input/SimpleInput';
import SimpleButton from '../button/SimpleButton';
import Api from '../../api/Api';

const AuthForm = (props: PropForAuthForm) => {
  const { apiUrl, message, buttonText1, buttonText2, navDestination } = props;

  const { control, handleSubmit, errors } = useForm();
  const navigation = useNavigation();

  const navi = () => {
    navigation.navigate('Home');
  };

  const onSubmit = (formData: MemberLoginFormData) => {
    const member = new Member(formData.email, formData.password);
    Api.auth(apiUrl, member, navi, message);
  };

  return (
    <Form>
      <SimpleInput
        label={'Eメールアドレス'}
        errors={errors}
        errorType={[
          { type: 'required', errorMessage: '入力は必須です' },
          { type: 'pattern', errorMessage: 'Eメールの形式が間違っています' },
        ]}
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
          errorType={[
            { type: 'required', errorMessage: '入力は必須です' },
            { type: 'minLength', errorMessage: 'パスワードが短すぎます' },
          ]}
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
        <SimpleButton text={buttonText1} onPress={handleSubmit(onSubmit)} />
        <SimpleButton
          text={buttonText2}
          onPress={() => navigation.navigate(navDestination)}
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

export default AuthForm;
