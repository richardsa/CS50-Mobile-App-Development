import React from 'react';
import { Button, Text, View, Image, StyleSheet, Picker } from 'react-native';
import SectionListMovies from '../SectionListMovies';

import {Constants} from 'expo'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class SearchResultsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
   return {
     headerTitle: 'Search Results',
   };
 };

 state = {
   showError: false,
   errorMessage: "",
   movieResults: this.props.navigation.getParam('result'),
 };

 updateResults = async (searchQuery) => {
   const results = await searchMovies(searchQuery)
   const movieList = results.movieList
   const numResults = results.numResults
   if(results.Error) {
     this.setState(prevState => ({ showError: !prevState.showError }));
     this.setState(prevState => ({ errorMessage: results.Error }));
   } else {
         this.setState({movieResults: results.movieList})
         this.props.navigation.navigate('SearchResultsScreen', {
         numResults: numResults,
         title: searchQuery,
         result: this.state.movieResults,
         query: searchQuery
       });
   }

 }

  render() {
    return (
      <React.Fragment>
        <View behavior="padding" style={styles.container}>
          <Text>Search Results for "{this.props.navigation.getParam('query')}"</Text>
          <Text>numResults {this.props.navigation.getParam('numResults')}</Text>
          <Picker>
          {this.props.navigation.getParam('pages').map((item, index) => {
   return (< Picker.Item label={item.toString()} value={index} key={index} />);
})}

           </Picker>
        </View>
        <SectionListMovies
          movies={this.state.movieResults}
          onSelectMovie={(movie) => {
              this.props.navigation.navigate('MovieDetails', {
              Title: movie.Title,
              Year: movie.Year,
              Poster: movie.Poster
            })
          }}
        />
        </React.Fragment>
    );
  }

  goToRandomContact = () => {
    console.log( this.props.navigation.getParam('title'))
    console.log( 'result ' + this.props.navigation.getParam('result'))
    //console.log('screenProps ' + JSON.stringify(this.props.screenProps))
  }

  /*goToRandomContact = () => {
    const { contacts } = this.props.screenProps;
    const phone = this.props.navigation.getParam('phone');
    let randomContact;
    while (!randomContact) {
      const randomIndex = Math.floor(Math.random() * contacts.length);
      if (contacts[randomIndex].phone !== phone) {
        randomContact = contacts[randomIndex];
      }
    }

    // this.props.navigation.navigate('ContactDetails', {
    //   ...randomContact,
    // });
    this.props.navigation.push('ContactDetails', {
      ...randomContact,
    });
  };*/
}
