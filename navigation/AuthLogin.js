import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/ProfileScreen';

const config = Platform.select({
  web: { headerMode: 'screen'},
  default: {},
});

const AuthLogin = createStackNavigator(
  { Auth: SignInScreen }
);

AuthLogin.path = '';

export default AuthLogin;
