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
import OrderItemDetailScreen from './src/screen/OrderItemDetailScreen';
import {HeaderBackButton} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import OrderVerificationScreen from './src/screen/OrderVerificationScreen';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'ログイン'}}
        />
        <Stack.Screen
          name="MemberApplicate"
          component={MemberApplicateScreen}
          options={{title: '新規登録'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'T&K',
            headerLeft: () => <HeaderBackButton style={styles.leftButton} />,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{title: 'カートの中身'}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{title: '商品詳細'}}
        />
        <Stack.Screen
          name="OrderForm"
          component={OrderFormScreen}
          options={{title: '住所入力フォーム'}}
        />
        <Stack.Screen
          name="Complete"
          component={CompleteScreen}
          options={{
            title: '注文完了',
            headerLeft: () => <HeaderBackButton style={styles.leftButton} />,
          }}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{title: '購入履歴'}}
        />
        <Stack.Screen
          name="OrderItemDetail"
          component={OrderItemDetailScreen}
          options={{title: '購入履歴(日別)'}}
        />
        <Stack.Screen
          name="OrderVerification"
          component={OrderVerificationScreen}
          options={{title: '注文確認'}}
        />
      </Stack.Navigator>
      <FlashMessage position="center" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  leftButton: {
    display: 'none',
  },
});
export default App;
