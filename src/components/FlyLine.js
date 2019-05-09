import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlaneSvg = () => {
  return (
    <svg
      width='14'
      height='13'
      viewBox='0 0 14 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.9 13H5.2L8.45 7.52632L12.025 7.52632C12.5645 
        7.52632 13 7.06789 13 6.5C13 5.93211 12.5645 5.47368 
        12.025 5.47368L8.45 5.47368L5.2 0L3.9 0L5.525 5.47368H1.95L0.975 
        4.10526L0 4.10526L0.65 6.5L0 8.89474H0.975L1.95 7.52632H5.525L3.9 13Z'
        fill='#D2D5D6'
      />
    </svg>
  );
};

const Line = styled.div`
  width: 95px;
  border-top: 1px solid #d2d5d6;
  display: inline-block;
  margin-right: 1px;
`;

const StopsInfo = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #8b9497;
`;

var wordForm = function(num) {
  const cases = [2, 0, 1, 1, 1, 2];
  const forms = ['ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК'];
  const correct =
    num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5];
  return forms[correct];
};

const WrapperHrz = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WrapperVrt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  text-align: center;
  height: 50px;
  align-content: end;
`;

export default function FlyLine(props) {
  const { stops } = props;
  return (
    <WrapperVrt>
      <StopsInfo>
        {stops} {wordForm(stops)}
      </StopsInfo>
      <WrapperHrz>
        <Line />
        <PlaneSvg />
      </WrapperHrz>
    </WrapperVrt>
  );
}
FlyLine.propTypes = {
  stops: PropTypes.number.isRequired
};
