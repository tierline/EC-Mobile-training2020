import React, {Component} from 'react';
import {Body, Header, Left, Right, Button, Title} from 'native-base';
import {StyleSheet} from 'react-native';
const NavBar = () => {
  return (
    <Header style={styles.header}>
      <Left>
        <Button transparent>
        </Button>
      </Left>
      <Body>
        <Title>おみせのなまえ</Title>
      </Body>
      <Right>
        <Button transparent>
        </Button>
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
