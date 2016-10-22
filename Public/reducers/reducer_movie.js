import { GET_DEFAULT_MOVIES, UPDATE_ACTIVE_MOVIE } from '../actions/actions_movies'

const INITIAL_STATE = { movieData: [], activeMovie: {} }

export default function(state = INITIAL_STATE , action) {
  switch (action.type) {
    case GET_DEFAULT_MOVIES: {
      let temp = {}
      temp.movieData = action.payload.data
      return {...state, ...temp}
    }
    case UPDATE_ACTIVE_MOVIE: {
      let temp = {}
      temp.activeMovie = action.payload
      return {...state, ...temp}
    }
  }
  return state
}
