import React from 'react';
//import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button } from 'react-native';
import 'react-native-gesture-handler';
//import store from './state/store'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Login_screen from './screens/login-screen'; 
//import shopScreen from './screens/shop-screen';
import screenOne from './screens/shop-screen1';
import shopScreen2 from './screens/shop-screen2';
import cartScreen from './screens/cart-screen';


//import {Menu_Tab1,Menu_Tab2,Menu_Tab3} from './screens/menu-tabs';
import { Provider } from 'react-redux';
import store from './state/store'
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Shop " screenOptions={{
          headerShown: false
        }}>

          <Stack.Screen name="Shop" component={screenOne} />
          <Stack.Screen name="Inner store" component={shopScreen2} />
          <Stack.Screen name="Cart" component={cartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


export default App;