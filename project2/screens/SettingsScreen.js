import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";


export default class SettingsScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings coming soon.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  },
  text: {
    textAlign: "center"
  }
});
