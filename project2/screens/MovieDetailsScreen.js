import React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';

import {Constants} from 'expo'

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
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class MovieDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
   return {
     headerTitle: navigation.getParam('Title'),
   };
 };
  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <Text>Title: {this.props.navigation.getParam('Title')}</Text>
        <Text>Year: {this.props.navigation.getParam('Year')}</Text>
        <Image source={{uri: this.props.navigation.getParam('Poster')}}
      style={{width: 400, height: 400}} />
      </View>
    );
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
