import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  width: 308px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 992px) {
    width: 1024px;
  }
`

const Cell = styled.div`
  justify-self: ${props => props.justify};
  align-self: ${props => props.align};
  grid-column: ${props => props['s-W']};
  grid-row: ${props => props['s-H']};

  @media (min-width: 768px) {
    grid-column: ${props => props['m-W']};
    grid-row: ${props => props['m-H']};
  }
  @media (min-width: 992px) {
    grid-column: ${props => props.W};
    grid-row: ${props => props.H};
  }
`

Cell.propTypes = {
  W: PropTypes.string,
  H: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
}

Cell.defaultProps = {
  W: 'span 1',
  H: 'span 1',
  justify: 'start',
  align: 'start',
}

const GridWrapper = styled.div`
  display: ${props => props.display};
  justify-items: ${props => props.justifyItems};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  align-content: ${props => props.alignContent};
  grid-template-columns: ${props => props.templateCols};
  grid-template-rows: ${props => props.templateRows};
  grid-gap: ${props => props.gap};
  grid-auto-flow: ${props => props.autoFlow};
`

export default class Grid extends Component {
  static Cell = Cell
  static Container = Container
  render() {
    return <GridWrapper {...this.props}>{this.props.children}</GridWrapper>
  }
}

Grid.propTypes = { children: PropTypes.any }

GridWrapper.defaultProps = {
  display: 'grid',
  justifyItems: 'start',
  alignItems: 'start',
  justifyContent: 'start',
  alignContent: 'start',
  templateCols: 'auto',
  templateRows: 'auto',
  gap: 'unset',
  autoFlow: 'row',
}

GridWrapper.propTypes = {
  display: PropTypes.string,
  justifyItems: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
  templateCols: PropTypes.string,
  templateRows: PropTypes.string,
  gap: PropTypes.string,
  autoFlow: PropTypes.string,
}
