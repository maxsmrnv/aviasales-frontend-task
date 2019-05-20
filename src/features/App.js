import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Layout from './Layout';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const currency = {
  codes: {
    RUB: { sign: '\u20BD' },
    USD: { sign: '\u0024' },
    EUR: { sign: '\u20AC' }
  },
  active: 'RUB'
};

const initialState = {
  currency: currency,
  tickets: [],
  filters: {}
};
/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    devtoolMiddleware
  )
);
/* eslint-enable */



class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Layout />
      </Provider>
    );
  }
}

export default hot(App);
