import React from 'react';
import {Body, Header, Left, Right, Button, Title} from 'native-base';
import {StyleSheet} from 'react-native';
const NavBar = () => {
  return (
    <Header style={styles.header}>
      <Left />
      <Body>
        <Title>T&K</Title>
      </Body>

      <Right>
        <Button transparent />
      </Right>
    </Header>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
  },
});
export default NavBar;
