import React from 'react'
import { Button } from 'react-native'
import SearchMoviesForm from '../SearchMoviesForm'

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Search Movies',
      headerRight: (
        <Button
          title="Movie List"
          onPress={() => navigation.navigate('MoviesList')}
          color="#a41034"
        />
      ),
    };
  };
  render() {
    return (
      <React.Fragment>
        <SearchMoviesForm />
        <Button title="Go to movie details"
        onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('MovieDetails', {
              movie: this.props.screenProps.movie
            });
          }}
      />
      </React.Fragment>
    );
  }

}
