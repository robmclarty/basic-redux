# Basic Redux

Create application using data from https://api.exchangeratesapi.io/latest


## Requirements

- Initially there should be a button. Data is fetched when the button is clicked
- "Loading" message/UI component should be shown while data is fetched
- Error modal should be shown when data fetch fails
- Application parts should be tested
- React framework
- Application state management using Redux or GraphQL client-side framework
- Pagination and styling is not necessary, table of exchange rates will be good enough
- Code should be persisted in Git and shared using Git bundle or pushed to some remote repository


## Install

- `npm install`
- `npm run build`
- open `/build/index.hml` in a browser

NOTE: Build output has been committed to the repository for demonstration
purposes (to show what the expected output looks like). In real-life the
contents of `/build` would be omitted through `.gitignore`.


## Folder Structure

The following structure is overkill for this small of an application, but I've
included it for demonstration's sake. This provides a good set of buckets to
begin to grow the application from scratch up until it reaches the point where
a larger, more sophisticated and complex, structure would be warranted.

```
/assets - static assets like html, images, fonts, etc.
  index.html - main application starting point
/src - react application code
  /actions - redux action creators
  /components - dumb/stateless components
  /containers - smart/state-aware components
  /constants - config/global values
  /helpers - utility/helper modules
  /middleware - in-between action=>reducer functions
  /reducers - redux store
  index.js - main React application
/tests - test scripts
/build - target for automated build processes
```


## Example Data

Sample output from https://api.exchangeratesapi.io/latest

```json
{
  "rates": {
    "CAD": 1.4561,
    "HKD": 8.6372,
    "ISK": 137.7,
    "PHP": 55.809,
    "DKK": 7.4727,
    "HUF": 333.37,
    "CZK": 25.486,
    "AUD": 1.6065,
    "RON": 4.7638,
    "SEK": 10.7025,
    "IDR": 15463.05,
    "INR": 78.652,
    "BRL": 4.5583,
    "RUB": 70.4653,
    "HRK": 7.4345,
    "JPY": 120.72,
    "THB": 33.527,
    "CHF": 1.0991,
    "SGD": 1.5002,
    "PLN": 4.261,
    "BGN": 1.9558,
    "TRY": 6.3513,
    "CNY": 7.7115,
    "NOK": 10.0893,
    "NZD": 1.7426,
    "ZAR": 16.3121,
    "USD": 1.1034,
    "MXN": 21.1383,
    "ILS": 3.8533,
    "GBP": 0.86158,
    "KRW": 1276.66,
    "MYR": 4.5609
  },
  "base": "EUR",
  "date": "2019-11-08"
}
```
