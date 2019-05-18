import React from 'react';
import Ticket from '../components/Ticket';
import { connect } from 'react-redux';

const sortTicketsAsc = ({ price }, { price: next }) =>
  parseFloat(price) - parseFloat(next);

const mapStateToProps = state => {
  const props = {
    tickets: state.tickets,
    filters: state.filters
  };
  return props;
};

class TicketsList extends React.Component {
  render() {
    const { tickets, filters } = this.props;
    return tickets
      .filter(({ stops }) => filters[stops].isChecked)
      .sort(sortTicketsAsc)
      .map((ticket, i) => <Ticket key={i} {...ticket} />);
  }
}

export default connect(mapStateToProps)(TicketsList);
