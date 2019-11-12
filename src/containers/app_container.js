import React from 'react'
import { connect } from 'react-redux'

import { fetchRates } from '../actions'
import { RATES_URL } from '../constants/endpoints'
import Button from '../components/button'
import RateTable from '../components/rate_table'
import Spinner from '../components/spinner'
import Notification from './notification_container'

const mapStateToProps = state => ({
  rates: state.rates,
  isLoading: state.notifications.isLoading
})

const mapDispatchToProps = dispatch => ({
  onButtonPress: () => dispatch(fetchRates(RATES_URL))
})

const AppContainer = ({
  rates,
  isLoading,
  onButtonPress
}) => (
  <div>
    <header>
      <Notification />
      <Spinner isLoading={isLoading} />
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
