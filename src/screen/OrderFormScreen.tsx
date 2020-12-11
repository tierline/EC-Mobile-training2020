import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Input, Text, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import AddressForm from '../components/AddressForm';
const OrderFormScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content style={styles.form}>
        <AddressForm />
      </Content>
      <Button full danger onPress={() => navigation.navigate('Complete')}>
        <Text>注文を確定する</Text>
      </Button>
    </Container>
  );
};
const styles = StyleSheet.create({
  form: {
    margin: 15,
  },
});
export default OrderFormScreen;
