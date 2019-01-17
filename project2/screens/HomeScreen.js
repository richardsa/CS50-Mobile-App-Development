import React from 'react'
import SearchMoviesForm from '../SearchMoviesForm'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Home',
  };

  render() {
    return <SearchMoviesForm />;
  }
}
