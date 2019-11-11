import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import appReducer from './reducers'
import AppContainer from './containers/app_container'

const store = createStore(appReducer)

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app-root')
)
