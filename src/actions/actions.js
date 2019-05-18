import { createAction } from 'redux-actions';

export const updateFilters = createAction('UPDATE_FILTERS');
export const setOnlyFilters = createAction('SET_ONLY_FILTER');
export const setAllFilters = createAction('SET_ALL_FILTERS');
