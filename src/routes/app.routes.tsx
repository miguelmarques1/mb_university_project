import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Start } from '../screens/start';
import { Home } from '../screens/home';
import { SignIn } from '../screens/signin';
import { ForgotPass } from '../screens/forgot_pass';
// import { App4 } from '../screens/reset';

const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Start" component={Start} />      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      {/* <Stack.Screen name="Reset" component={App4} /> */}
      
    </Stack.Navigator>
  );
}