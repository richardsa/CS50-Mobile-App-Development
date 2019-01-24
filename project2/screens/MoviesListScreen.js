import React from 'react'
import {SectionList} from 'react-native'

import SectionListMovies from '../SectionListMovies';

export default class MoviesList extends React.Component {
  render() {
    return (
      <SectionListMovies
        movies={this.props.screenProps.movies}
        onSelectMovie={(movie) => {
            this.props.navigation.navigate('MovieDetails', {
            Title: movie.Title,
            Year: movie.Year
          })
        }}
      />
    )
  }
}
