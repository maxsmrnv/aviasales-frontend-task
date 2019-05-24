import React from 'react'
import { shallow } from 'enzyme'

import App from '../features/App'

describe('<App /> smoke rendering', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})
