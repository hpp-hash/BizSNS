/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import CreateAccountScreen from './src/CreateAccountScreen';
import VerifyEmailScreen from './src/VerifyEmailScreen';
import ForgotAccountScreen from './src/ForgotAccountScreen';
import CheckEmailScreen from './src/CheckEmailScreen';
import WelcomeScreen from './src/WelcomeScreen';
import PostHistoryScreen from './src/PostHistoryScreen';
import CreatePostScreen from './src/CreatePostScreen';
import SuccessPostScreen from './src/SuccessPost';

const welcomeHistoryCreateStack = createStackNavigator({
  WelcomeScreen: WelcomeScreen,
  PostHistory: PostHistoryScreen,
  CreatePost: CreatePostScreen
});

export default createAppContainer(createSwitchNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    CreateAccount: CreateAccountScreen,
    VerifyEmail: VerifyEmailScreen,
    ForgotAccount: ForgotAccountScreen,
    CheckEmail: CheckEmailScreen,
    SuccessPost: SuccessPostScreen,
    welcomeHistoryCreate: welcomeHistoryCreateStack,
  },
  {
    initialRouteName: 'Home'
  }
));