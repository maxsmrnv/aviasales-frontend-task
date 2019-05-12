import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #ff6d00;
  width: 160px;
  height: 56px;
  border-radius: 5px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1), 0px 1px 0px #d64d08;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

export default function BuyButton(props) {
  const formatPrice = props.price.toString().replace(/(\w{3})$/, ' $1');
  return (
    <StyledButton>
      Купить <br />
      за {formatPrice}&#8381;
    </StyledButton>
  );
}

BuyButton.propTypes = {
  price: PropTypes.number.isRequired
};
