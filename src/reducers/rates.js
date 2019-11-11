
// NOTE: This is just to test things out prior to implementing a real api call.
const defaultState = {
  "CAD": 1.4561,
  "USD": 1.1034,
  "JPY": 120.72,
  "GBP": 0.86158
}

const rates = (state = defaultState, action) => {
  switch(action.type) {
  default:
    return state
  }
}

export default rates
