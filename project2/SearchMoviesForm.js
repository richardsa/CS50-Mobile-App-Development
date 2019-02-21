import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View, ScrollView} from 'react-native'
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
    };
  };

  componentDidMount = () => {
    this.setState({Title: ''})
  }

  getHandler = key => val => {
    this.setState({[key]: val})
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.Title)
    this.setState({Title: ''})
  }

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
}
