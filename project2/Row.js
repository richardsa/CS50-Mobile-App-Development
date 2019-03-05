import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'

const styles = StyleSheet.create({
  row: {padding: 20, flexDirection: "row", alignItems: 'center'},
  image: {marginRight: 15, width: 50, height: 70}

})

const Row = props => (
  <TouchableOpacity
    style={styles.row}
    onPress={() => props.onSelectMovie(props)}>
    <Image source={{uri: props.Poster}}
      style={styles.image} />
    <Text>{props.Title} - {props.Year}</Text>
  </TouchableOpacity>
)

export default Row
