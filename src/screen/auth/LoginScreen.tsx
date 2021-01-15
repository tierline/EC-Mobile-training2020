import React from 'react';
import { Container, Content, H1 } from 'native-base';
import AuthForm from '../../components/form/AuthForm';
import { Alert, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <Container>
      <H1 style={styles.h1}>ログイン</H1>
      <Content style={styles.content}>
        <AuthForm
          apiUrl={'/api/member/login'}
          message={'login'}
          buttonText1={'ログイン'}
          buttonText2={'新規会員登録へ'}
          navDestination={'MemberApplicate'}
        />
      </Content>
    </Container>
  );
};

const wait = async () => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve('slow');
      console.log('slow promise is done');
    }, 2000);
  });
  // console.log('setTimeout外 実行されるか？');
};
const asyncGet = async () => {
  try {
    const waitResult = await wait();
    console.log(waitResult);
  } catch (error) {
    Alert.alert('get error:' + error);
  }
  console.log('asyncGet last done');
};
const thenGet = async () => {
  wait()
    .then((waitResult) => {
      console.log(waitResult);
    })
    .catch((error) => {
      Alert.alert('get error:' + error);
    });
  console.log('thenGet last done');
};

const styles = StyleSheet.create({
  h1: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  content: {
    paddingTop: 50,
  },
});

export default LoginScreen;
