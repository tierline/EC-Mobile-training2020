import React from 'react';
import { Container, Content, H1 } from 'native-base';
import { StyleSheet } from 'react-native';
import MemberApplicateForm from '../../components/form/auth/MemberApplicateForm';
const ApplicateScreen = () => {
  return (
    <Container>
      <H1 style={styles.h1}>新規登録</H1>
      <Content style={styles.content}>
        <MemberApplicateForm />
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
