import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/button'
import RateTable from '../components/rate_table'

const AppContainer = ({ rates }) => (
  <div>
    <Button label="Hello World!" />
    <RateTable rates={rates} />
  </div>
)

const mapStateToProps = state => ({
  rates: state.rates
})

export default connect(mapStateToProps)(AppContainer)
