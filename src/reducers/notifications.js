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
    return {
      ...state,
      isLoading: true
    }
  case FETCH_RATES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      isVisible: true,
      status: STATUS_SUCCESS,
      message: 'Rates fetched successfully.'
    }
  case FETCH_RATES_FAIL:
    return {
      ...state,
      isLoading: false,
      isVisible: true,
      status: STATUS_ERROR,
      message: 'Something went wrong.'
    }
  default:
    return state
  }
}

export default notifications
