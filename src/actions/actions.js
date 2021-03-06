import { createAction } from 'redux-actions'
import routes from '../api/routes'
// import tickets from '../../server/tickets.json'

export const fetchTicketsRequest = createAction('TICKETS_FETCH_REQUEST')
export const fetchTicketsSuccess = createAction('TICKETS_FETCH_SUCCESS')
export const fetchTicketsFailure = createAction('TICKETS_FETCH_FAILURE')

export const fetchTickets = () => {
  return dispatch => {
    dispatch(fetchTicketsRequest())
    fetch(routes.ticketsPath())
      .then(resp => resp.json())
      .then(data => dispatch(fetchTicketsSuccess({ tickets: data.tickets })))
      .catch(e => {
        dispatch(fetchTicketsFailure(e))
        throw e
      })
  }
}

/// this code can be used for stubbing server
// const fakeFetch = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(tickets)
//     }, 200)
//   })

// export const fetchTickets = () => {
//   return dispatch => {
//     dispatch(fetchTicketsRequest())
//     fakeFetch()
//       .then(data => dispatch(fetchTicketsSuccess({ tickets: data.tickets })))
//       .catch(e => {
//         dispatch(fetchTicketsFailure(e))
//         throw e
//       })
//   }
// }

export const updateFilters = createAction('UPDATE_FILTERS')
export const setOnlyFilters = createAction('SET_ONLY_FILTER')
export const setAllFilters = createAction('SET_ALL_FILTERS')

export const setCurrency = createAction('SET_CURRENCY')

export const loadRubRateRequest = createAction('LOAD_RUB_RATE_REQUEST')
export const loadRubRateSuccess = createAction('LOAD_RUB_RATE_SUCCESS')
export const loadRubRateReqFailure = createAction('LOAD_RUB_RATE_FAILURE')

export const fetchRates = () => {
  return dispatch => {
    dispatch(loadRubRateRequest())
    fetch(routes.exchangePath())
      .then(resp => resp.json())
      .then(data => dispatch(loadRubRateSuccess(data.rates)))
      .catch(e => {
        dispatch(loadRubRateReqFailure(e))
      })
  }
}
