import React from 'react'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

// keyExtractor tells the list to use the Poster for the react keys instead of the default key property.
_keyExtractor = (item, index) => item.Poster;


const SectionListMovies = props => {
  // above can be furhter simplied using below
  // below version automatically has access to all
  // key value pairs of object
  // renderItem = ({item}) => <Row {...item} />
  const renderItem = obj => <Row Title={obj.item.Title} Year={obj.item.Year} Poster={obj.item.Poster} onSelectMovie={props.onSelectMovie} />
  return (
    <SectionList
      //renderItem={this.renderItem}
      renderItem={renderItem}
      keyExtractor={this._keyExtractor}
      sections={[{
        data: props.movies
      }]}
    />
  )
}

SectionListMovies.propTypes = {
  contacts: PropTypes.array,
}

export default SectionListMovies
