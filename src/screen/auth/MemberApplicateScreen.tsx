import React from 'react';
import { Container, Content, H1 } from 'native-base';
import { StyleSheet } from 'react-native';
import AuthForm from '../../components/form/auth/AuthForm';

const ApplicateScreen = () => {
  return (
    <Container>
      <H1 style={styles.h1}>新規登録</H1>
      <Content style={styles.content}>
        <AuthForm
          apiUrl={'/api/member/applicate'}
          message={'applicate'}
          buttonText1={'新規会員登録'}
          buttonText2={'戻る'}
          navDestination={'Login'}
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
    marginTop: 50,
  },
});

export default ApplicateScreen;
