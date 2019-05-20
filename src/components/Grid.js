import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cell = styled.div`
  grid-column: ${props => props.W};
  grid-row: ${props => props.H};
  justify-self: ${props => props.justify};
  align-self: ${props => props.align};
`;

Cell.propTypes = {
  W: PropTypes.string,
  H: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string
};

Cell.defaultProps = {
  W: 'span 1',
  H: 'span 1',
  justify: 'start',
  align: 'start'
};

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
`;

export default class Grid extends Component {
  static Cell = Cell;
  render() {
    return <GridWrapper {...this.props}>{this.props.children}</GridWrapper>;
  }
}

GridWrapper.defaultProps = {
  display: 'grid',
  justifyItems: 'start',
  alignItems: 'start',
  justifyContent: 'start',
  alignContent: 'start',
  templateCols: 'auto',
  templateRows: 'auto',
  gap: 'unset',
  autoFlow: 'row'
};

GridWrapper.propTypes = {
  display: PropTypes.string,
  justifyItems: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
  templateCols: PropTypes.string,
  templateRows: PropTypes.string,
  gap: PropTypes.string,
  autoFlow: PropTypes.string
};
