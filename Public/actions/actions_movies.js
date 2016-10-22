import axios from 'axios'

export const GET_DEFAULT_MOVIES = 'GET_DEFAULT_MOVIES'

export function getDefaultMovies () {
  const request = axios.get('/api/movies/default')

  return {
    type: GET_DEFAULT_MOVIES,
    payload: request
  }
}
