import React from 'react';
import {View} from 'react-native';
import {Container} from 'native-base';
import {StyleSheet} from 'react-native';
import MemberApplicateForm from '../components/form/MemberApplicateForm';
const ApplicateScreen = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.loginForm}>
        <MemberApplicateForm />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginForm: {
    flex: 3,
    marginTop: 30,
  },
  home: {
    flex: 1,
    marginTop: 30,
  },
});

export default ApplicateScreen;
