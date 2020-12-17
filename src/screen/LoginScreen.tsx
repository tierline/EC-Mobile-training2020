import React from 'react';
import {Container, Content} from 'native-base';
import LoginForm from '../components/form/LoginForm';
import {StyleSheet} from 'react-native';
const LoginScreen = () => {
  return (
    <Container>
      <Content style={styles.loginForm}>
        <LoginForm />
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  loginForm: {
    marginTop: 30,
  },
  home: {
    flex: 1,
  },
});

export default LoginScreen;
