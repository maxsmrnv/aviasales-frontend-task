import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import Ticket from '../components/Ticket';
import data from '../data/tickets.json';
import Grid from '../components/Grid';
import Logo from '../components/Logo';

const LogoWrapper = styled.div`
  margin: 50px 0 36px 0;
`;

class App extends Component {
  sortTicketsAsc = ({ price }, { price: next }) =>
    parseFloat(price) - parseFloat(next);

  renderTickets = () => {
    if (!data.tickets) {
      return null;
    }
    return data.tickets
      .sort(this.sortTicketsAsc)
      .map((ticket, i) => <Ticket key={i} {...ticket} />);
  };

  render() {
    return (
      <Grid justifyContent={'center'} justifyItems={'center'}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Grid gap={'20px'}>{this.renderTickets()}</Grid>
      </Grid>
    );
  }
}

export default hot(App);
