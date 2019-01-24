import React from 'react';
import { Button, Text, View, Image } from 'react-native';

export default class MovieDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
   return {
     headerTitle: navigation.getParam('Title'),
   };
 };
  render() {
    return (
      <View>
        <Text>Title: {this.props.navigation.getParam('Title')}</Text>
        <Text>Year: {this.props.navigation.getParam('Year')}</Text>
        <Text>Title: {this.props.screenProps.movie.Title}</Text>
        <Text>Year: {this.props.screenProps.movie.Year}</Text>
        <Text>Director: {this.props.screenProps.movie.Director}</Text>
        <Text>Plot: {this.props.screenProps.movie.Plot}</Text>
        <Image source={{uri: this.props.screenProps.movie.Poster}}
       style={{width: 400, height: 400}} />
        <Button title="Go to random" onPress={this.goToRandomContact} />
      </View>
    );
  }

  goToRandomContact = () => {
    console.log(this.props.navigation.getParam('Title'))
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
