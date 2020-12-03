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
import Main from './src/Main'
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
        <Header />
        <Main />
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
