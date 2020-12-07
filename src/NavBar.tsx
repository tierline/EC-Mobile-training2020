import React, { Component } from 'react'
import {Body, Container, Header, Icon, Left,Right, Button, Title} from 'native-base'
export default class NavBar extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name='arrow-back'/>
          </Left>
            <Body>
              <Title>おみせのなまえ</Title>
            </Body>
            <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    )
  }
}