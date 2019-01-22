import React from 'react';
import { Button, Text, View } from 'react-native';

export default class MovieDetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <Button title="Go to random contact" onPress={this.goToRandomContact} />
      </View>
    );
  }

  goToRandomContact = () => {
    console.log('hey bruh')
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
