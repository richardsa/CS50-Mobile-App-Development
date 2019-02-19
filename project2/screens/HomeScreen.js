import React from 'react'
import { Button, Text } from 'react-native'
import SearchMoviesForm from '../SearchMoviesForm'
import {searchMovies} from '../api'

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
    console.log(pageArr)
    if(results.Error) {
      this.setState(prevState => ({ showError: !prevState.showError }));
      this.setState(prevState => ({ errorMessage: results.Error }));
    } else {
          this.setState({movieResults: results.movieList})
          this.props.navigation.navigate('SearchResultsScreen', {
          pages: pageArr,
          numResults: numResults,
          title: searchQuery,
          result: this.state.movieResults,
          query: searchQuery
        });
    }

  }

  // current search function for checking user input against mockData.js
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
