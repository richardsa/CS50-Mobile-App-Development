import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { search, movie } from './mockData'

import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';

import Row from './Row'

export default class App extends React.Component {
  state = {
    search: search,
    movie: movie,
  }

  render() {
    return (
      <View style={styles.container} >
          <ScrollView>

            {search.Search.map(movie => <Row  key={movie.Poster} {...movie} /> )}
          </ScrollView>
      </View>
      //<HomeScreen search={this.state.search} movie={this.state.movie} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
