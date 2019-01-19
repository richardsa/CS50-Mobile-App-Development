import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { search, movie } from './mockData'

import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SearchMoviesForm from './SearchMoviesForm'
import MoviesList from './MoviesList'

export default class App extends React.Component {
  state = {
    search: search,
    movie: movie,
  }

  render() {
    return (
      <View style={styles.container} >
        <MoviesList
          movies={this.state.search.Search}
        />

      </View>
      //<HomeScreen search={this.state.search} movie={this.state.movie} />
        // mapping array syntax
      //  {search.Search.map(movie => <Row  key={movie.Poster} {...movie} /> )}
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
