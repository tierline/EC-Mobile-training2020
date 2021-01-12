import React from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet } from 'react-native';
import MemberApplicateForm from '../components/form/MemberApplicateForm';
const ApplicateScreen = () => {
  return (
    <Container>
      <Content style={styles.form}>
        <MemberApplicateForm />
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
});

export default ApplicateScreen;
