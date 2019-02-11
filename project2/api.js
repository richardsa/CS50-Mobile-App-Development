import MOVIE_KEY from './env'
console.log('movie key ' + MOVIE_KEY )

export const searchMovies = async () => {
    const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=' + MOVIE_KEY)
    //const results = await response.json()
    // below is rewritten above line
    // only interested in results key so can destructure
    const results = await response.json()
    //console.log(results)
    //return results.map(contact => processContact(contact))
    console.log(results)
    return results
}
