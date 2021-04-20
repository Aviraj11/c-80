import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen'
import HomeScreen from "./screens/HomeScreen"
import ExchangeScreen from "./screens/ExchangeScreen"
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './components/CustomSidBarMenu'
import SettingScreen from './screens/SettingScreen'

export default class App extends React.Component {
  render() {
  return (
    <View>
    <SignupLoginScreen/>
    </View>
  );
  }
}

export const AppDrawerNavigator = createDrawerNavigator({
  Home : { screen: AppTabNavigator  },
  SettingScreen:{screen :SettingScreen},
},
  
{
  contentComponent : CustomSideBarMenu
},
{
  initialRouteName :'Home'

});


export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {screens:HomeScreen},
  ExchangeScreen: {screens:ExchangeScreen},
  Drawer: {AppDrawerNavigator}
})

const AppContainer =  createAppContainer(AppTabNavigator);