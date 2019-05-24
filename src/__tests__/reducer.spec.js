import reducer from '../reducers'
import * as actions from '../actions/actions'
import tickets from '../../server/tickets.json'

describe('tickets reducer', () => {
  const { fetchTicketsSuccess } = actions
  const action = {
    ...fetchTicketsSuccess(),
    payload: tickets,
  }
  it('count of loaded tickets should be equal with file', () => {
    const fetchSize = reducer({}, action).tickets.length
    expect(fetchSize).toEqual(tickets.tickets.length)
  }),
    it('all unique stops-count shoud be transform as filters', () => {
      const actualStopsList = Object.values(reducer({}, action).filters)
        .map(({ stops }) => stops)
        .sort()
      const expectedStopsList = [
        ...new Set(tickets.tickets.map(({ stops }) => stops).sort()),
      ]
      expect(actualStopsList).toEqual(expectedStopsList)
    })
})
