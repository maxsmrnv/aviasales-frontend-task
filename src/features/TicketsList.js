import React from 'react'
import Ticket from '../components/Ticket'
import { connect } from 'react-redux'

const sortTicketsAsc = ({ price }, { price: next }) =>
  parseFloat(price) - parseFloat(next)

const mapStateToProps = state => {
  const props = {
    tickets: state.tickets,
    ticketsFetchingState: state.ticketsFetchingState,
    filters: state.filters,
    rubExchangeRate: state.rubExchangeRate,
    currency: state.currency,
  }
  return props
}

class TicketsList extends React.Component {
  render() {
    const {
      ticketsFetchingState,
      tickets,
      filters,
      rubExchangeRate,
      currency,
    } = this.props

    const sign = currency.codes[currency.active]
    const rate = rubExchangeRate[currency.active]

    return (
      <>
        {ticketsFetchingState === 'failed' && (
          <p>Something went wrong please try later...</p>
        )}
        {ticketsFetchingState === 'requested' && <p>Loading...</p>}
        {ticketsFetchingState === 'finished' &&
          tickets
            .filter(({ stops }) => filters[stops].isChecked)
            .sort(sortTicketsAsc)
            .map((ticket, i) => (
              <Ticket key={i} currency={{ rate: rate, ...sign }} {...ticket} />
            ))}
      </>
    )
  }
}

export default connect(mapStateToProps)(TicketsList)
