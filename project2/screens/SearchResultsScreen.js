import React from 'react';
import { Button, Text, View, Image } from 'react-native';

export default class SearchResultsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
   return {
     headerTitle: navigation.getParam('Title'),
   };
 };
  render() {
    return (
      <View>
        <Text>Title: {this.props.navigation.getParam('title')}</Text>
        <Text>Year: {this.props.navigation.getParam('year')}</Text>
        <Image source={{uri: this.props.navigation.getParam('poster')}}
       style={{width: 400, height: 400}} />
        <Text>Other Results</Text>
        <Text>Title: {this.props.screenProps.movie.Title}</Text>
        <Text>Year: {this.props.screenProps.movie.Year}</Text>
        <Text>Director: {this.props.screenProps.movie.Director}</Text>
        <Text>Plot: {this.props.screenProps.movie.Plot}</Text>

        <Button title="Go to random" onPress={this.goToRandomContact} />
      </View>
    );
  }

  goToRandomContact = () => {
    console.log( this.props.navigation.getParam('title'))
    console.log('yeah boy ' + JSON.stringify(this.props.screenProps))
    console.log('yeah' + this.props.screenProps.movie.Title)
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
