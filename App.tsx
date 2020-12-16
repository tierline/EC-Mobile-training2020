import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from './src/screens/CartScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import OrderFormScreen from './src/screens/OrderFormScreen';
import CompleteScreen from './src/screens/CompleteScreen';
import LoginScreen from './src/screens/LoginScreen';
import ApplicateScreen from './src/screens/ApplicateScreen'

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Applicate" component={ApplicateScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="OrderForm" component={OrderFormScreen} />
        <Stack.Screen name="Complete" component={CompleteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
