import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/button'
import RateTable from '../components/rate_table'
import { fetchRates } from '../actions'

const mapStateToProps = state => ({
  rates: state.rates
})

const mapDispatchToProps = dispatch => ({
  onButtonPress: () => dispatch(fetchRates())
})

const AppContainer = ({ rates, onButtonPress }) => (
  <div>
    <Button
      label="Fetch Rates"
      onPress={onButtonPress} />

    <RateTable rates={rates} />
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
