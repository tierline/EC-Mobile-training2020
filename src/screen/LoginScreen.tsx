import React from 'react';
import {Body, Button, Container, Content, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import LoginForm from '../components/LoginForm'
import { StyleSheet } from 'react-native';
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <Text>Login画面</Text>
      </Content>
      <Content style={styles.form}>
        <LoginForm/>
      </Content>
      <Content>
        <Body>
          <Button ><Text>ログイン</Text></Button>
        </Body>
      </Content>
        <Body>
          <Button success onPress={() => navigation.navigate('Home')}>
            <Text>---Home---</Text>
          </Button>
        </Body>
    </Container>
  );
};
const styles = StyleSheet.create({
  form: {
    margin: 15
  }
})

export default LoginScreen;
