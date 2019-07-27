/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createSwitchNavigator, createStackNavigator, createAppContainer, createDrawerNavigator, SafeAreaView, DrawerNavigator} from "react-navigation";
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
import DrawerContentComponents from './src/DrawerContentComponents';
import ChangePassword from './src/ChangePassword';
import Profile from './src/Profile';

const PostHistoryStack = createStackNavigator({
  PostHistory: PostHistoryScreen,
  CreatePost: CreatePostScreen,
  WelcomeScreen: WelcomeScreen,
  ChangePassword: ChangePassword,
  Profile: Profile
});

// OMG place MyDrawerNavigator after PostHistoryStack
const MyDrawerNavigator = createDrawerNavigator({ 
  PostHistory: PostHistoryStack
},
{
  contentComponent: DrawerContentComponents
})

export default createAppContainer(createSwitchNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    CreateAccount: CreateAccountScreen,
    VerifyEmail: VerifyEmailScreen,
    ForgotAccount: ForgotAccountScreen,
    CheckEmail: CheckEmailScreen,
    SuccessPost: SuccessPostScreen,
    MyDrawer: MyDrawerNavigator
  },
  {
    initialRouteName: 'Home'
  }
));
