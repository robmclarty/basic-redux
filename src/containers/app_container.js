import React from 'react'
import { connect } from 'react-redux'

import { fetchRates } from '../actions'
import Button from '../components/button'
import RateTable from '../components/rate_table'
import Notification from './notification_container'

const mapStateToProps = state => ({
  rates: state.rates
})

const mapDispatchToProps = dispatch => ({
  onButtonPress: () => dispatch(fetchRates())
})

const AppContainer = ({
  rates,
  onButtonPress
}) => (
  <div>
    <header>
      <Notification />
    </header>

    <br />

    <main>
      <h2>Currency Rates</h2>
      <Button
          label="Fetch Rates"
          onPress={onButtonPress} />
      <br /><br />
      <RateTable rates={rates} />
    </main>

    <footer>
      <br />
      &copy; 2019
    </footer>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
