import React from 'react'
import {SectionList} from 'react-native'
// use proptypes to keep track of props being passed
import PropTypes from 'prop-types'
import Row from './Row'
// keyExtractor tells the list to use the Poster for the react keys instead of the default key property.
_keyExtractor = (item, index) => item.Poster;
renderItem = obj => <Row Title={obj.item.Title} Year={obj.item.Year} />
// above can be furhter simplied using below
// below version automatically has access to all
// key value pairs of object
// renderItem = ({item}) => <Row {...item} />
const MoviesList = props => {
  return (
    <SectionList
      renderItem={this.renderItem}
      keyExtractor={this._keyExtractor}
      sections={[{
        data: props.movies
      }]}
    />
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array,
}
export default MoviesList
