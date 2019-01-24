import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
  row: {padding: 20},
})

const Row = props => (
  <TouchableOpacity
    style={styles.row}
    onPress={() => props.onSelectMovie(props)}>
    <Text>{props.Title} - {props.Year}</Text>
  </TouchableOpacity>
)

export default Row
