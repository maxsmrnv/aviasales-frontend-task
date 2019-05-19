import React from 'react';
import styled from 'styled-components';
import checkmark from '../static/icons/checkmark.png';
import PropTypes from 'prop-types';

const Styled = styled.div`
  input {
    display: none;
  }
  height: 20px;
  input + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #d2d5d6;
    border-radius: 3px;
  }

  input:checked + label {
    background: url(${checkmark}) no-repeat 5px;
    border-radius: 3px;
    border: 1px solid #2196f3;
    background-color: #f2fcff;
  }
`;

function Checkbox({ isChecked }) {
  return (
    <Styled>
      <input onChange={()=>{}} type='checkbox' checked={isChecked} />
      <label />
    </Styled>
  );
}

export default Checkbox;

Checkbox.propsTypes = {
  isChecked: PropTypes.bool
};
Checkbox.defaultProps = {
  isChecked: false
};
