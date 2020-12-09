import React from 'react';
import {Button, Content, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Content>
      <Button rounded onPress={() => navigation.goBack()}>
        <Text>戻る</Text>
      </Button>
    </Content>
  );
};
export default BackButton;
