import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
const Header = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.base_home}>
        <Text style={styles.button_home} >HOME</Text>
      </View>
      <View style={styles.base_menu}>
        <Text style={styles.button_menu} >MENU</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
  },
  base_home: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRightWidth:1,
    borderRightColor: 'white',
  },
  base_menu: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderLeftWidth:1,
    borderLeftColor: 'white',
  },
  button_home: {
    fontSize: 24,
    color: 'white',
  },
  button_menu: {
    fontSize: 24,
    color: 'white',
  },
})

export default Header