import { GET_DEFAULT_MOVIES, UPDATE_ACTIVE_MOVIE, GET_MOVIE_QUERY_DATA } from '../actions/actions_movies'

const INITIAL_STATE = { movieData: [], activeMovie: {}, status: null }

export default function(state = INITIAL_STATE , action) {
  switch (action.type) {
    case GET_DEFAULT_MOVIES: {
      let temp = {}
      //Update state in case data can not be fetched
      if(action.error){
        temp.status = 404
        temp.movieData = []
        return {...state, ...temp}
      }
      temp.movieData = action.payload.data.films
      temp.status = action.payload.data.status
      return {...state, ...temp}
    }
    case UPDATE_ACTIVE_MOVIE: {
      let temp = {}
      temp.activeMovie = action.payload
      return {...state, ...temp}
    }
    case GET_MOVIE_QUERY_DATA: {
      let temp = {}
      //Update state in case data can not be fetched
       if(action.error){
        temp.status = 404
        temp.movieData = []
        return {...state, ...temp}
      }
      temp.movieData = action.payload.data.films
      temp.status = action.payload.data.status
      return {...state, ...temp}
    }
  }
  return state
}
