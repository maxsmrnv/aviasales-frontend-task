import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import Grid from '../components/Grid';
import Logo from '../components/Logo';
import ControlPanel from './ControlPanel';
import TicketList from './TicketsList';
import { tickets } from '../data/tickets.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */
const initialState = {
  tickets: tickets,
  filters: {
    ...tickets.reduce((acc, ticket) => {
      return { ...acc, [ticket.stops]: { stops: ticket.stops, isChecked: true } };
    }, {})
  }
};
/* eslint-disable no-underscore-dangle */
const store = createStore(reducer, initialState, devtoolMiddleware);
/* eslint-enable */

const LogoWrapper = styled.div`
  margin: 50px 0 36px 0;
`;

const Container = styled.div`
  width: 1024px;
  margin: auto;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Grid templateCols={'repeat(12,1fr)'} gap={'0 24px'}>
            <Grid.Cell W={'span 12'} justify={'center'}>
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
            </Grid.Cell>
            <Grid.Cell W={'2 / span 3'}>
              <ControlPanel />
            </Grid.Cell>
            <Grid.Cell W={'5 / span 7'}>
              {tickets && tickets.length && (
                <Grid gap={'20px'}>
                  <TicketList />
                </Grid>
              )}
            </Grid.Cell>
          </Grid>
        </Container>
      </Provider>
    );
  }
}

export default hot(App);
