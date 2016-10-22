import { GET_DEFAULT_MOVIES } from '../actions/actions_movies'

const INITIAL_STATE = { movieData: [], activeMovie: {} }

export default function(state = INITIAL_STATE , action) {
  switch (action.type) {
    case GET_DEFAULT_MOVIES: {
      let temp = {}
      temp.movieData = action.payload.data
      let newState = {...state, ...temp}
      return {...state, ...temp}
    }
  }
  return state
}
