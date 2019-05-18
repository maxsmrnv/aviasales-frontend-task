import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions/actions';

const tickets = (state = [], { type }) => {
  switch (type) {
    default:
      return state;
  }
};

const filters = handleActions(
  {
    [actions.updateFilters](state, { payload }) {
      const newState = {
        ...state,
        [payload]: { ...state[payload], isChecked: !state[payload].isChecked }
      };
      return newState;
    },
    [actions.setAllFilters](state, { payload }) {
      console.log(payload);
      const newState = Object.values(state).reduce((acc, filter) => {
        const newFilter = {
          [filter.stops]: { ...filter, isChecked: !payload }
        };
        return { ...acc, ...newFilter };
      }, {});
      return newState;
    },
    [actions.setOnlyFilters](state, { payload }) {
      const newState = Object.values(state).reduce((acc, filter) => {
        const newFilter =
          filter.stops === payload
            ? { [filter.stops]: { ...filter, isChecked: true } }
            : { [filter.stops]: { ...filter, isChecked: false } };
        return { ...acc, ...newFilter };
      }, {});
      return newState;
    }
  },
  {}
);

export default combineReducers({
  tickets,
  filters
});
