import React from 'react';
import {Button} from 'react-native';
import {Container, Text} from 'native-base';
import ItemList from '../components/list/ItemList';
import NavBarBottom from '../components/nav/NavBarBottom';
import {useNavigation} from '@react-navigation/native';
import Storage from '../Storage';
import FlashMessage from 'react-native-flash-message';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ItemList />
      {Storage.getAuth() ? (
        <NavBarBottom />
      ) : (
        <Button
          dark
          full
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>ログインする</Text>
        </Button>
      )}

      <FlashMessage position="center" />
    </Container>
  );
};
export default HomeScreen;
