import React from 'react';
import StopsFilter from '../components/StopsFilter';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Checkbox from '../components/Checkbox';
import styled from 'styled-components';

const Only = styled.button`
  color: #2196f3;
  background-color: inherit;
  border: none;
  display: none;
  height: inherit;
  cursor: pointer;
  outline: none;
`;

const mapStateToProps = state => {
  const props = {
    filters: state.filters
  };
  return props;
};

const actionCreators = {
  updateFilters: actions.updateFilters,
  setAllFilters: actions.setAllFilters,
  setOnlyFilters: actions.setOnlyFilters,
  fetchRates: actions.fetchRates
};

class FilterList extends React.Component {
  updateFilterHandler = stops => e => {
    e.stopPropagation();
    const { updateFilters } = this.props;
    updateFilters(stops);
  };
  onlyBtnHandler = stops => e => {
    e.stopPropagation();
    const { setOnlyFilters } = this.props;
    setOnlyFilters(stops);
  };

  setAllFiltersHandler = allIsChecked => e => {
    e.stopPropagation();
    const { setAllFilters } = this.props;
    setAllFilters(allIsChecked);
  };

  componentDidMount = () => {
    this.props.fetchRates();
  };

  render() {
    const { filters } = this.props;
    const allIsChecked = Object.values(filters).reduce((acc, filter) => {
      return acc && filter.isChecked;
    }, true);

    return (
      <>
        {/* tech row means "all flight-stops" */}
        <StopsFilter
          updateFilters={this.setAllFiltersHandler(allIsChecked)}
          stopsCount={-1}
          checkbox={<Checkbox isChecked={allIsChecked} />}
        />
        {/* flight-stops from loaded tickets */}
        {Object.values(filters).map(({ stops, isChecked }) => (
          <StopsFilter
            updateFilters={this.updateFilterHandler(stops)}
            key={stops}
            stopsCount={stops}
            checkbox={<Checkbox isChecked={isChecked} />}
            button={
              <Only onClick={this.onlyBtnHandler(stops)} className='onlyButton'>
                ТОЛЬКО
              </Only>
            }
          />
        ))}
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  actionCreators
)(FilterList);
