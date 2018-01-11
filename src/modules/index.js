import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import starsReducer from './stars/reducer'

export default combineReducers({
  routing: routerReducer,
  stars: starsReducer
})