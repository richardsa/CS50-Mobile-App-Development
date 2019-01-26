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

  handleSubmit = formState => {
    console.log("form state" + formState)
    var movie_list = this.props.screenProps.movies
    const result = movie_list.filter(movie => movie.Title.toLowerCase().indexOf(formState.toLowerCase()) > -1);
    console.log(JSON.stringify(result))
    this.props.navigation.navigate('SearchResultsScreen', {
      poster: result[0].Poster,
      year: result[0].Year,
      title: formState
    });
  }
  render() {
    return (
      <React.Fragment>
        <SearchMoviesForm onSubmit={this.handleSubmit} />
        <Button title="Go to movie details"
        onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('MovieDetails', {
              movie: this.props.screenProps.Title,
              test: 'yeah boy'
            });
          }}
      />
      </React.Fragment>
    );
  }

}
