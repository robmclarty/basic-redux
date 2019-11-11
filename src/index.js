import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import appReducer from './reducers'

import AppContainer from './containers/app_container'

const store = createStore(appReducer)

render(<AppContainer />, document.getElementById('app-root'))
