import React from 'react';
import { Button, Text, View, Image, StyleSheet, Picker } from 'react-native';
import SectionListMovies from '../SectionListMovies';

import {Constants} from 'expo'

import {searchMovies} from '../api'

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
     headerRight: (
       <Button
         title="New Search"
         onPress={() => navigation.navigate('HomeScreen')}
         color="#a41034"
       />
     ),
   };
 };

 state = {
   showError: false,
   errorMessage: "",
   movieResults: this.props.navigation.getParam('result'),
   page: this.props.navigation.getParam('page'),
 };

 updateResults = async (searchQuery, pageNum) => {
   const results = await searchMovies(searchQuery, pageNum)
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
         this.props.navigation.push('SearchResultsScreen', {
         pages: pageArr,
         page: this.state.page,
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
          <Picker
            selectedValue={this.state.page}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({page: itemValue}, () =>{
                this.updateResults(this.props.navigation.getParam('query'), this.state.page)
              })
            }>

            {this.props.navigation.getParam('pages').map((item, index) => {
              return (< Picker.Item label={item.toString()} value={item} key={index} />);
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
}
