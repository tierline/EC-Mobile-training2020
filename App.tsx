/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Header from './src/Header'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <View>
      <View style={styles.container}>
        <Header></Header>
        <Text style={styles.main}>Hello World!</Text>
        <Text style={styles.main}>React Native!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  main: {
    fontSize: 30,
  }

});

export default App;
