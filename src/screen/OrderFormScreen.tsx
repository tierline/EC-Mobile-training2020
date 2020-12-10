import React from 'react';
import {Container, Content, Input, Text, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import AddressForm from '../components/AddressForm';
const OrderFormScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <AddressForm />
      </Content>
      <Button full danger onPress={() => navigation.navigate('Complete')}>
        <Text>注文を確定する</Text>
      </Button>
      <Button full onPress={() => navigation.goBack()}>
        <Text>戻る</Text>
      </Button>
    </Container>
  );
};
export default OrderFormScreen;
