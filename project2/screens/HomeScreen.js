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

  // current search function for checking user input against mockData.js
  handleSubmit = formState => {
    console.log("form state" + formState)
    var movie_list = this.props.screenProps.movies
    const result = movie_list.filter(movie => movie.Title.toLowerCase().indexOf(formState.toLowerCase()) > -1);
    console.log(JSON.stringify(result))
    this.props.navigation.navigate('SearchResultsScreen', {
      poster: result[0].Poster,
      year: result[0].Year,
      title: formState,
      result: result,
      query: formState
    });
  }
  render() {
    return (
          <SearchMoviesForm onSubmit={this.handleSubmit} />
    );
  }

}
