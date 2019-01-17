import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';


export default class App extends React.Component {
  render() {
    return (
      <HomeScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
