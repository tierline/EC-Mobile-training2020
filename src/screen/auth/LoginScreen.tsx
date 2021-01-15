import React from 'react';
import { Container, Content, H1 } from 'native-base';
import AuthForm from '../../components/form/AuthForm';
import { StyleSheet } from 'react-native';

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
