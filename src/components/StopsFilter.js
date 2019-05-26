import React from 'react'
import styled from 'styled-components'
import stopForms from '../utils/wordForms'

const Wrapper = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;

  color: #4a4a4a;
  cursor: pointer;
  user-select: none;
  display: grid;
  grid-template-columns: 2fr 5fr 4fr;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 36px;
  &:hover {
    background-color: #f1fcff;
  }

  &:hover > .onlyButton {
    display: block;
  }

  .onlyButton:hover {
    display: block;
    color: #ff8124;
  }
`

const StyledStopTitle = styled.span`
  justify-self: start;
`

const stopsFormExtended = stopsCount => {
  switch (true) {
    case stopsCount === 0:
      return 'Без пересадок'
    case stopsCount === -1:
      return 'Все'
    default:
      return `${stopsCount} ${stopForms(stopsCount).toLowerCase()}`
  }
}

function StopsFilter({ stopsCount, checkbox, button, updateFilters }) {
  return (
    <Wrapper onClick={updateFilters}>
      {checkbox}
      <StyledStopTitle>{stopsFormExtended(stopsCount)}</StyledStopTitle>
      {button}
    </Wrapper>
  )
}

export default StopsFilter
