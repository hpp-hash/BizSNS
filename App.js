/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import CreateAccountScreen from './src/CreateAccountScreen';
import VerifyEmailScreen from './src/VerifyEmailScreen';
import ForgotAccountScreen from './src/ForgotAccountScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    CreateAccount: CreateAccountScreen,
    VerifyEmail: VerifyEmailScreen,
    ForgotAccount: ForgotAccountScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer/>
  }
}

export default createAppContainer(AppNavigator);