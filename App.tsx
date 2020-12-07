/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

// import React from 'react';
// import NavBar from './src/NavBar'
// import ItemList from './src/ItemList'
// import Sample from './src/Sample'
// import {StyleSheet} from 'react-native'
// import { Container, Content, Header, Button, Text } from 'native-base';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// declare const global: { HermesInternal: null | {} };
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from './src/screen/CartScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')}/>
    </View>
  );
}

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;