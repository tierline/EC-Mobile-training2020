import React from 'react';
import {Container, Content, Input, Text, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const OrderFormScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <Text>form画面</Text>
        <Input />
      </Content>
      <Content>
      </Content>
        <Button full danger onPress={() => navigation.navigate('Complete')}>
          <Text>注文を確定する</Text>
        </Button>
    </Container>
  );
};
export default OrderFormScreen;
