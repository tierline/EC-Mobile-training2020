import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Text } from 'native-base';
import ItemList from '../components/list/ProductList';
import NavBarBottom from '../components/nav/NavBarBottom';
import { useNavigation } from '@react-navigation/native';
import Storage from '../Storage';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <ItemList />
      {Storage.getIsAuthenticated() ? (
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7e3af',
  },
});
export default HomeScreen;
