import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../LoginPage';
import Routes from '../constants/Routes';
import HomeNavigation from './HomeNavigation';
import Home from '../Screens/Home';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.LOGIN} component={LoginPage} options={{headerShown:false}} />
      <Stack.Screen name={Routes.HOME} component={HomeNavigation} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default AuthNavigator