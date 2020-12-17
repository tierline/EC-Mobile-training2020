import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from './src/screen/CartScreen';
import HomeScreen from './src/screen/HomeScreen';
import OrderFormScreen from './src/screen/OrderFormScreen';
import CompleteScreen from './src/screen/CompleteScreen';
import LoginScreen from './src/screen/LoginScreen';
import MemberApplicateScreen from './src/screen/MemberApplicateScreen';
import MyPageScreen from './src/screen/MyPageScreen';
import ProductDetailScreen from './src/screen/ProductDetailScreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="MemberApplicate"
          component={MemberApplicateScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="OrderForm" component={OrderFormScreen} />
        <Stack.Screen name="Complete" component={CompleteScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
