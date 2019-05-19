import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions/actions';

const tickets = handleActions(
  {
    [actions.fetchTicketsSuccess](
      state,
      {
        payload: { tickets }
      }
    ) {
      return tickets;
    }
  },
  {}
);

const filters = handleActions(
  {
    [actions.fetchTicketsSuccess](
      state,
      {
        payload: { tickets }
      }
    ) {
      return tickets.reduce((acc, ticket) => {
        return {
          ...acc,
          [ticket.stops]: { stops: ticket.stops, isChecked: true }
        };
      }, {});
    },
    [actions.updateFilters](state, { payload }) {
      const newState = {
        ...state,
        [payload]: { ...state[payload], isChecked: !state[payload].isChecked }
      };
      return newState;
    },
    [actions.setAllFilters](state, { payload }) {
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

const rubExchangeRate = handleActions(
  {
    [actions.loadRubRateSuccess](_, { payload }) {
      return { RUB: 1, ...payload };
    }
  },
  {}
);

const currency = handleActions(
  {
    [actions.setCurrency](state, { payload }) {
      return { ...state, active: payload };
    }
  },
  {}
);

export default combineReducers({
  tickets,
  filters,
  rubExchangeRate,
  currency
});
