import MOVIE_KEY from './env'
console.log('movie key ' + MOVIE_KEY )

const processMovieSearch = movie => ({
  Poster: movie.Poster,
  Title: movie.Title,
  Year: movie.Year
})

export const searchMovies = async ( searchTerm, page = 0 ) => {
  console.log('title ' + searchTerm)
  console.log('https://www.omdbapi.com/?s=' + searchTerm + '&apikey=' + MOVIE_KEY + '&p=' + page)
    const response = await fetch('https://www.omdbapi.com/?s=' + searchTerm + '&apikey=' + MOVIE_KEY + '&p=' + page)
    //const results = await response.json()
    // below is rewritten above line
    // only interested in results key so can destructure
    const results = await response.json()
    if (results.Error) {
      return results
    }
    const movieList = results.Search.map(processMovieSearch)
    const numResults = results.totalResults
    console.log(numResults)
    console.log(results.Search.map(processMovieSearch))
    //return results.Search.map(processMovieSearch)
    return {
      movieList: movieList,
      numResults: numResults,
    }
}
