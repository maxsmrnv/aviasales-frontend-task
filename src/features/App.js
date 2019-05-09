import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import PriceButton from '../components/Button';
import FlyLine from '../components/FlyLine';

class App extends Component {
  render() {
    return (
      <>
        <PriceButton price={17256} />
        <FlyLine stops={3} />
      </>
    );
  }
}

export default hot(App);
