import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class Sample extends Component {
  render() {
    return (
      // <Container>
        <Content>
          <Button light><Text> Light </Text></Button>
          <Button danger><Text> Danger </Text></Button>
          <Button dark><Text> Dark </Text></Button>
        </Content>
      // </Container>
    );
  }
}