import {
  FETCH_RATES_PENDING,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_FAIL
} from '../constants/action_types'

const sampleFetchRates = {
  "CAD": 1.273,
  "USD": 1.0111,
  "SEK": 10.7025
}

// Fetch Rates
// -----------
export const fetchRates = () => (dispatch, callApi) => {
  dispatch(fetchRatesPending())

  // return callApi({ url: ratesUrl, method: 'GET' })
  //   .then(res => dispatch(fetchRatesSuccess(res.rates)))
  //   .catch(err => dispatch(fetchRatesFail(err)))

  // REFACTOR: This is only temporary to test out the core action data flow.
  // Uncomment the above code when middleware has been implemented.
  return Promise.resolve({ rates: sampleFetchRates })
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
