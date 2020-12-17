import React from 'react';
import {View} from 'react-native';
import {Body, Button, Container, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import MemberApplicateForm from '../components/form/MemberApplicateForm';
const ApplicateScreen = () => {
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <View style={styles.loginForm}>
        <MemberApplicateForm />
      </View>
      <View style={styles.home}>
        <Body>
          <Button success onPress={() => navigation.navigate('Home')}>
            <Text>商品一覧へ</Text>
          </Button>
        </Body>
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
