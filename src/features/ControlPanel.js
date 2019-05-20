import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import CurrencySwitch from '../components/CurrencySwitch';
import FilterList from './FilterList';
import Grid from '../components/Grid';

const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  width: 232px;
  padding-bottom: 24px;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.5px;

  color: #4a4a4a;
`;

const mapStateToProps = state => {
  const props = {
    currency: state.currency
  };
  return props;
};

const actionCreators = {
  setCurrency: actions.setCurrency
};

const Span = styled.span`
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

class ControlPanel extends React.Component {
  setCurrencyHandler = code => () => {
    const { setCurrency } = this.props;
    setCurrency(code);
  };

  render() {
    const { currency } = this.props;
    return (
      <Wrapper>
        <Grid justifyContent={'center'}>
          <Span marginBottom={'11px'} marginTop={'15px'}>
            ВАЛЮТА
          </Span>
          <CurrencySwitch setCurrency={this.setCurrencyHandler} {...currency} />
          <Span marginBottom={'10px'} marginTop={'30px'}>
            КОЛИЧЕСТВО ПЕРЕСАДОК
          </Span>
        </Grid>
        <FilterList />
      </Wrapper>
    );
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(ControlPanel);
