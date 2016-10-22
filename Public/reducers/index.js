import { combineReducers } from 'redux'
import movieReducer from './reducer_movie'

const rootReducer = combineReducers({
  movies: movieReducer
})

export default rootReducer
