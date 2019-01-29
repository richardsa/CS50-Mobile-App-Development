import React from 'react'
import { Button, Text } from 'react-native'
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

  state = {
    showError: false,
    errorMessage: "",
  };

  // current search function for checking user input against mockData.js
  handleSubmit = formState => {
    console.log("form state" + formState)
    var movie_list = this.props.screenProps.movies
    const result = movie_list.filter(movie => movie.Title.toLowerCase().indexOf(formState.toLowerCase()) > -1);
    console.log(JSON.stringify('result ' + result))
    if(result == "") {
      this.setState(prevState => ({ showError: !prevState.showError }));
      this.setState(prevState => ({ errorMessage: formState }));
    } else {
      this.props.navigation.navigate('SearchResultsScreen', {
        poster: result[0].Poster,
        year: result[0].Year,
        title: formState,
        result: result,
        query: formState
      });
    }
  }
    render() {
    return (
        <React.Fragment>
          <SearchMoviesForm onSubmit={this.handleSubmit} />
          {this.state.showError && (
          <Text>
            No results found for "{ this.state.errorMessage }"
          </Text>
          )}
        </React.Fragment>

    );
  }

}
