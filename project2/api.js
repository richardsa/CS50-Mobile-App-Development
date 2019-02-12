import MOVIE_KEY from './env'
console.log('movie key ' + MOVIE_KEY )

const processMovieSearch = movie => ({
  Poster: movie.Poster,
  Title: movie.Title,
  Year: movie.Year
})

export const searchMovies = async ( searchTerm ) => {
  console.log('title ' + searchTerm)
  console.log('https://www.omdbapi.com/?s=' + searchTerm + '&apikey=' + MOVIE_KEY)
    const response = await fetch('https://www.omdbapi.com/?s=' + searchTerm + '&apikey=' + MOVIE_KEY)
    //const results = await response.json()
    // below is rewritten above line
    // only interested in results key so can destructure
    const results = await response.json()
    if (results.Error) {
      return results
    }
    return results.Search.map(processMovieSearch)
}
