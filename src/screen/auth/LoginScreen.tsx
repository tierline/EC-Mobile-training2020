import React from 'react';
import { Container, Content, H1 } from 'native-base';
import LoginForm from '../../components/form/auth/LoginForm';
import { StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <Container>
      <H1 style={styles.h1}>ログイン・登録</H1>
      <Content style={styles.content}>
        <LoginForm />
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
