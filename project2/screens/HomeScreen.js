import React from 'react'
import {Button} from 'react-native'
import SearchMoviesForm from '../SearchMoviesForm'

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Search Movies',
      headerRight: (
        <Button
          title="Movie"
          onPress={() => navigation.navigate('MovieDetails')}
          color="#a41034"
        />
      ),
    };
  };

  render() {
    return <SearchMoviesForm />;
  }
}
