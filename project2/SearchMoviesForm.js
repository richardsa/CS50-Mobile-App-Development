import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View, ScrollView} from 'react-native'
import {Constants} from 'expo'


import Row from './Row'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginBottom:20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})


export default class SearchMoviesForm extends React.Component {
  state = {
    Title: '',
  }

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
  getHandler = key => val => {
      this.setState({[key]: val})
    }
  handleSubmit = () => {
   console.log('submit')
   console.log(this.state.Title)
   this.props.onSubmit(this.state.Title)
  /* this.props.navigation.navigate('MovieDetails', {
     movie: this.props.screenProps.movie,
     Title: this.state.Title,
     test: 'yeah boy',
     this.props.onSubmit(this.state.Title)
   });*/
//   this.props.onSubmit(this.state.Title)
 }
//   this.props.onSubmit(this.state.Title)
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search movies..."
          value={this.state.Title}
          onChangeText={this.getHandler('Title')}
        />
        <Button title="Submit"
        onPress={this.handleSubmit} />
      </KeyboardAvoidingView>
    )
  }

  goToRandomContact = () => {
    console.log('yeah boyeee')

    console.log('movies ' + this.state.Title)
  /*  const phone = this.props.navigation.getParam('phone');
    let randomContact;
    while (!randomContact) {
      const randomIndex = Math.floor(Math.random() * contacts.length);
      if (contacts[randomIndex].phone !== phone) {
        randomContact = contacts[randomIndex];
      }
    }*/

    // this.props.navigation.navigate('ContactDetails', {
    //   ...randomContact,
    // });
  /*  this.props.navigation.push('ContactDetails', {
      ...randomContact,
    });*/
  };
}
