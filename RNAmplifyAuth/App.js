import React from 'react'
import {  createAppContainer,
          createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { TouchableOpacity } from 'react-native'
import { Icon, View } from 'native-base'

import HomeScreen from './src/component/screens/HomeScreen';
import ProfileScreen from './src/component/screens/ProfileScreen';
import AuthLoading from './src/component/screens/AuthLoadingScreen';
import SignInScreen from './src/component/screens/SignInScreen';
import SignUpScreen from './src/component/screens/SignUpScreen';
import ForgetPasswordScreen from './src/component/screens/ForgetPasswordScreen';
import WelcomeScreen from './src/component/screens/WelcomeScreen';
import SettingsScreen from './src/component/screens/SettingsScreen';

// Auth stack
const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `Welcome to this App`, // for the header screen
      headerBackTitle: 'Back'
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Create a new account`,
    }),
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: `Log in to your account`,
    }),
  },
  ForgetPassword: {
    screen: ForgetPasswordScreen,
    navigationOptions: () => ({
      title: `Create a new password`,
    }),
  },
})

// App tabs located at the bottom of the screen
const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: ProfileScreen
  },
  Settings: {
    screen: SettingsScreen
  }
})

const AppStackNavigator = createStackNavigator({
  Header: {
    screen: AppTabNavigator,
    // Set the header icon
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Icon name='md-menu' size={24}/>
          </View>
        </TouchableOpacity>
      )
    })
  }
})

// App stack for the drawer
const AppDrawerNavigator = createDrawerNavigator({
  Tabs: AppStackNavigator,
  Home: HomeScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen
})

const AppStack = createStackNavigator({ HomeScreen, ProfileScreen });
const AuthStack = createStackNavigator({ SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      App: AppDrawerNavigator,
      Auth: AuthStackNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);