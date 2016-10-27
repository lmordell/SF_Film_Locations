import axios from 'axios'

export const GET_DEFAULT_MOVIES = 'GET_DEFAULT_MOVIES'
export const GET_MOVIE_QUERY_DATA = 'GET_MOVIE_QUERY_DATA'
export const UPDATE_ACTIVE_MOVIE = 'UPDATE_ACTIVE_MOVIE'

export function getDefaultMovies () {
  //Get default data about Mrs. Doubtfire
  const request = axios.get('/api/movies/query/?title=Mrs.+Doubtfire')

  return {
    type: GET_DEFAULT_MOVIES,
    payload: request
  }
}

export function getMovieQueryData (title) {
  const request = axios.get('/api/movies/query', {
    params: {
      title: title
    }
  })

  return {
    type: GET_MOVIE_QUERY_DATA,
    payload: request
  }
}

export function updateActiveMovie (movie) {

  return {
    type: UPDATE_ACTIVE_MOVIE,
    payload: movie 
  }
}
