import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Constants} from 'expo'
import { search, movie } from './mockData'
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';


import HomeScreen from './screens/HomeScreen';
import SearchMoviesForm from './SearchMoviesForm'
import MoviesList from './screens/MoviesListScreen'
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen'
import SearchResultsScreen from './screens/SearchResultsScreen'

const NavigationTab = createStackNavigator({
  HomeScreen: HomeScreen,
  MoviesList: MoviesList,
  MovieDetails: MovieDetailsScreen,
  SearchMoviesForm: SearchMoviesForm,
  SearchResultsScreen: SearchResultsScreen,
}, {
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerTintColor: '#a41034',
  }
})

const MainNavigator = createBottomTabNavigator({
  NavigationTab: NavigationTab,
  Settings: SettingsScreen,
}, {
    tabBarOptions: {
      activeTintColor: '#a41034',
    }
})

const AppNavigator = createSwitchNavigator({
  Main: MainNavigator,
  Login: LoginScreen,
}, {
  initialRouteName: 'Login',
})


export default class App extends React.Component {
  state = {
    search: search,
    movie: movie,
  }

  render() {
    return <AppNavigator screenProps={{
          movies: this.state.search.Search,
          movie: this.state.movie,
          }} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
