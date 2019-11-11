import {
  FETCH_RATES_PENDING,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_FAIL
} from '../constants/action_types'

// NOTE: This is just to test things out prior to implementing a real api call.
const defaultState = {
  "CAD": 1.4561,
  "USD": 1.1034,
  "JPY": 120.72,
  "GBP": 0.86158
}

const rates = (state = defaultState, action) => {
  switch(action.type) {
  case FETCH_RATES_PENDING:
  case FETCH_RATES_SUCCESS:
  case FETCH_RATES_FAIL:
  default:
    return state
  }
}

export default rates
