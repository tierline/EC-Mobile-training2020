import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
const Main = () => {
  return (
    <View style={styles.main}>
      <Image style={styles.image} source={require('./image/po.jpg')}></Image>
      <Text style={styles.title}>商品名</Text>
      <Text style={styles.price}>価格</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>詳細</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>カートに追加</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '80%',
  },
  title: {
    fontSize: 23,
  },
  price: {
    fontSize: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  button: {
    elevation: 8,
    backgroundColor: 'yellow',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
  }
})

export default Main