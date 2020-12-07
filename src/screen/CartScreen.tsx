import React, { Component } from 'react'
import { Button } from 'react-native'
import { Container, Content, Text } from 'native-base'
import Header from '../NavBar'

export default class CartScreen extends Component {
  render() {
    const {navigation} = this.props
    return (
      <Container>

        <Content>
          <Header />
        </Content>
        <Content>
          <Text>Cart!</Text>
          <Button title="Home"　onPress={() => navigation.navigate("Home")}></Button>
          <Button title="Details"　onPress={() => navigation.navigate("Details")}></Button>

        </Content>
      </Container>
    )
  }
}