import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const Input = styled.input`

    display: none;

    & + label:after {
    content: '${props => props.value}';
  }

    &:first-of-type + label {
    border-radius: 5px 0 0 5px;
  }

  &:last-of-type + label {
    border-radius: 0 5px 5px 0;
  }

  & + label {
    display: inline-grid;
    justify-items: center;
    align-items: center;
    width: 68px;
    height: 40px;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #d2d5d6;
    color: #2196f3;
  }

  &:hover + label {
    background-color: #f2fcff;
    color: #2196f3;
    border: 1px solid #2196f3;
  }

  &:checked + label {
    border: 1px solid #2196f3;
    background-color: #2196f3;
    color: #ffffff;
  }

`;

function CurrencySwitch({ codes, active }) {
  return (
    <Styled>
      {codes.map(code => (
        <React.Fragment key={code}>
          <Input
            id={code}
            type='radio'
            name='currency'
            value={code}
            defaultChecked={code === active}
          />
          <label htmlFor={code} />
        </React.Fragment>
      ))}
    </Styled>
  );
}

export default CurrencySwitch;
