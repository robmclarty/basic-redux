import {
  FETCH_RATES_PENDING,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_FAIL
} from '../constants/action_types'
import {
  STATUS_SUCCESS,
  STATUS_INFO,
  STATUS_ERROR
} from '../constants/status_types'

const defaultState = {
  isLoading: false,
  isVisible: false,
  status: STATUS_INFO,
  message: ''
}

const notifications = (state = defaultState, action) => {
  switch(action.type) {
  case FETCH_RATES_PENDING:
  case FETCH_RATES_SUCCESS:
  case FETCH_RATES_FAIL:
  default:
    return state
  }
}

export default notifications
