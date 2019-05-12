import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';
import PropTypes from 'prop-types';

const StyledTime = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 26px;
  color: #4a4a4a;
  margin-bottom: 10px;
`;

const StyledDate = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #8b9497;
`;

const StyledAirport = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #4a4a4a;
`;

const Time = ({ time }) => <StyledTime>{time}</StyledTime>;

const Day = ({ date }) => {
  const parsed = format(new Date(date), 'DD.MM.YY');
  const formated = format(parsed, 'D MMM YYYY, dd', { locale: ru });
  return <StyledDate>{formated}</StyledDate>;
};

const Airport = ({ code, city, isDeparture }) => {
  return (
    <StyledAirport>
      {isDeparture ? `${code}, ${city}` : `${city}, ${code}`}
    </StyledAirport>
  );
};

export default class PointDetails extends React.Component {
  static Time = Time;
  static Day = Day;
  static Airport = Airport;
}

Airport.propTypes = {
  code: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  isDeparture: PropTypes.bool
};

Time.propTypes = {
  time: PropTypes.string.isRequired
};

Day.propTypes = {
  date: PropTypes.string.isRequired
};
