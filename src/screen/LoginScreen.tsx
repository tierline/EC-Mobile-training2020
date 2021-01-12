import React from 'react';
import { Container, Content } from 'native-base';
import LoginForm from '../components/form/LoginForm';
import { StyleSheet } from 'react-native';
const LoginScreen = () => {
  return (
    <Container>
      <Content style={styles.form}>
        <LoginForm />
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
});

export default LoginScreen;
