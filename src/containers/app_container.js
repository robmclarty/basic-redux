import React from 'react'
import { connect } from 'react-redux'

import { fetchRates } from '../actions'
import Button from '../components/button'
import RateTable from '../components/rate_table'
import Notification from '../components/notification'

const mapStateToProps = state => ({
  rates: state.rates,
  notificationIsVisible: state.notifications.isVisible,
  notificationMessage: state.notifications.message,
  notificationStatus: state.notifications.status
})

const mapDispatchToProps = dispatch => ({
  onButtonPress: () => dispatch(fetchRates()),
  onResetNotification: () => dispatch(resetNotification())
})

const AppContainer = ({
  rates,
  notificationIsVisible,
  notificationMessage,
  notificationStatus,
  onButtonPress
}) => (
  <main>
    <Notification
        isVisible={notificationIsVisible}
        status={notificationStatus}
        message={notificationMessage}
        onReset={onResetNotification} />

    <h2>Currency Rates</h2>
    <RateTable rates={rates} />

    <Button
        label="Fetch Rates"
        onPress={onButtonPress} />
  </main>
)

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
