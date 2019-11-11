const sampleFetchRates = {
  "CAD": 1.273,
  "USD": 1.0111,
  "SEK": 10.7025
}

// TODO: make this an async function and use fetch API to hit target url.
const callApi = ({
  url = '',
  method = 'GET',
  body = {}
}) => {
  return Promise.resolve({
    rates: sampleFetchRates
  })
}

// If an action returns a function instead of an object, apply this middleware.
const thunk = ({ dispatch, getState }) => next => action => {
  return typeof action === 'function' ?
    action(dispatch, callApi, getState) :
    next(action);
}

export default thunk
