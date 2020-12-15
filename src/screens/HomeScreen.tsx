import React from 'react';
import {Button, Container, Content, Text} from 'native-base';
import NavBar from '../components/nav/NavBar';
import ItemList from '../components/list/ItemList';
import NavBarBottom from '../components/nav/NavBarBottom';
import {useNavigation} from '@react-navigation/native';
import Storage from '../Storage';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <NavBar />
      <Content>
        <ItemList />
      </Content>
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
    </Container>
  );
};
export default HomeScreen;
