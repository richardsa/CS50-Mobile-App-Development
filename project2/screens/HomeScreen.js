import React from 'react'
import { Button, Text } from 'react-native'
import SearchMoviesForm from '../SearchMoviesForm'
import {searchMovies} from '../api'

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Search Movies',
    };
  };

  state = {
    showError: false,
    errorMessage: "",
    movieResults: null,
  };

  getPages = (results) => {
    const pages = Math.ceil(numResults / 10)
    let pageArr = []
    for (var i = 1; i <= pages; i++) {
      pageArr.push(i)
    }
    return pageArr
  }

  getResults = async (searchQuery) => {
    const results = await searchMovies(searchQuery)
    const movieList = results.movieList
    const numResults = results.numResults
    const pages = Math.ceil(numResults / 10)
    let pageArr = []
    for (var i = 1; i <= pages; i++) {
      pageArr.push(i)
    }

    if(results.Error) {
      this.setState(prevState => ({ showError: !prevState.showError }));
      this.setState(prevState => ({ errorMessage: results.Error }));
    } else {
          this.setState({movieResults: results.movieList})
          this.props.navigation.navigate('SearchResultsScreen', {
          pages: pageArr,
          page: 0,
          numResults: numResults,
          title: searchQuery,
          result: this.state.movieResults,
          query: searchQuery
        });
    }

  }

  handleSubmit = formState => {
    var movie_list = this.props.screenProps.movies
    this.getResults(formState)
  }

    render() {
    return (
        <React.Fragment>
          <SearchMoviesForm onSubmit={this.handleSubmit} />
          {this.state.showError && (
          <Text>
          "{ this.state.errorMessage }"
          </Text>
          )}
        </React.Fragment>

    );
  }
}
