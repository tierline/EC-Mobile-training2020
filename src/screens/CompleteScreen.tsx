import React from 'react';
import {Button, Container, Content, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const CompleteScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <Text>注文完了</Text>
      </Content>
      <Content></Content>
      <Button full onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </Button>
    </Container>
  );
};
export default CompleteScreen;
