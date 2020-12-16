import React from 'react';
import {Body, Button, Container, Content, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import LoginForm from '../components/form/LoginForm';
import {StyleSheet} from 'react-native';
import ApplicateForm from '../components/form/ApplicateForm';
const ApplicateScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content style={styles.loginForm}>
        <ApplicateForm />
      </Content>
      <Content style={styles.home}>
        <Body>
          <Button success onPress={() => navigation.navigate('Home')}>
            <Text>---Home---</Text>
          </Button>
        </Body>
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
    marginTop: 30,
  },
});

export default ApplicateScreen;
