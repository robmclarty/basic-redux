import {
  FETCH_RATES_PENDING,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_FAIL
} from '../constants/action_types'

// Fetch Rates
// -----------
export const fetchRates = () => (dispatch, callApi) => {
  dispatch(fetchRatesPending())

  return callApi({ url: ratesUrl, method: 'GET' })
    .then(res => dispatch(fetchRatesSuccess(res.rates)))
    .catch(err => dispatch(fetchRatesFail(err)))
}

const fetchRatesPending = () => ({
  type: FETCH_RATES_PENDING
})

const fetchRatesSuccess = rates => ({
  type: FETCH_RATES_SUCCESS,
  rates
})

const fetchRatesFail = error => ({
  type: FETCH_RATES_FAIL,
  error
})
