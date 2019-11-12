import { mapRatesToState } from '../src/helpers/rate_helper'

const sampleRates = {
  "CAD": 1.4561,
  "USD": 1.1034,
  "JPY": 120.72,
  "GBP": 0.86158
}

test('new rates are added to the store', () => {
  const state = {}
  const rates = sampleRates
  const newState = mapRatesToState(state, rates)

  expect(newState['CAD']).toBe(1.4561)
})
