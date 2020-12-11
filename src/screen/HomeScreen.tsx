import React from 'react';
import {Container, Content} from 'native-base';
import NavBar from '../components/NavBar';
import ItemList from '../components/ItemList';
import NavBarBottom from '../components/NavBarBottom';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <NavBar />
      <Content>
        <ItemList />
      </Content>
      <NavBarBottom />
    </Container>
  );
};
export default HomeScreen;
