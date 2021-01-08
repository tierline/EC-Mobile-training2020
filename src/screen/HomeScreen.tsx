import React from 'react';
import {} from 'react-native';
import {Button, Container, Text} from 'native-base';
import ItemList from '../components/list/ProductList';
import NavBarBottom from '../components/nav/NavBarBottom';
import {useNavigation} from '@react-navigation/native';
import Storage from '../Storage';

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
            navigation.navigate('Login');
          }}>
          <Text>ログインする</Text>
        </Button>
      )}
    </Container>
  );
};
export default HomeScreen;
