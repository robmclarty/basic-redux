import { combineReducers } from 'redux'
import rates from './rates'

const appReducer = combineReducers({
  rates
  // NOTE: add more reducers here
})

export default appReducer
