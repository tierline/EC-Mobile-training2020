import React from 'react'
import { Content, Form, Input, Item, Label } from 'native-base'
import LoginScreen from '../screen/LoginScreen'
import { StyleSheet } from 'react-native'

const LoginForm = () => {
  return (
    <Content>
      <Form>
        <Label>メールアドレス</Label>
        <Item>
          <Input style={styles.input}/>
        </Item>
        <Label>パスワード</Label>
        <Item>
          <Input/>
        </Item>
      </Form>
    </Content>
  )
}
const styles = StyleSheet.create({
  input: {
    borderBottomWidth:2,
    borderBottomColor: 'green'
  }
})
export default LoginForm