import React, {Component} from 'react';
import {Body, Header, Left, Right, Button, Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';
const NavBar = () => {
  return (
    <Header style={styles.header}>
      <Left>
        <Button transparent>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>おみせのなまえ</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="menu" />
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
