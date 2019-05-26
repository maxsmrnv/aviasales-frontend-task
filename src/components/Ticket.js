import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import BuyButton from './BuyButton'
import FlightStops from './FlightStops'
import PointDetails from './PointDetails'
import Grid from './Grid'
import logo from '../static/Carriers'

const TicketWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
  /* width: 566px;
  height: 161px; */
`

const TicketButton = styled.div`
  padding: 25px;
  @media (min-width: 992px) {
    border-right: 1px solid #eceff1;
  }
`
const TicketContent = styled.div`
  padding: 25px;
`

const LogoImg = styled.img`
  /* width: 120px; */
  height: 35px;
`

export default function Ticket(props) {
  const {
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price,
    currency: { rate, sign },
  } = props
  return (
    <TicketWrapper>
      <Grid justifyItems={'center'} templateCols={'auto auto'}>
        <Grid.Cell s-W={'span 2'} m-W={'span 2'} justify={'center'}>
          <TicketButton>
            <Grid justifyItems={'center'} gap={'20px'}>
              <LogoImg src={logo[carrier]} />
              {rate && (
                <BuyButton sign={sign} price={Math.round(price * rate)} />
              )}
            </Grid>
          </TicketButton>
        </Grid.Cell>
        <Grid.Cell s-W={'span 2'} m-W={'span 2'} justify={'center'}>
          <TicketContent>
            <Grid templateCols={'repeat(6, 1fr)'} gap={'10px'}>
              <Grid.Cell W={'span 2'} m-W={'span 2'} s-W={'span 2'}>
                <PointDetails.Time time={departure_time} />
              </Grid.Cell>
              <Grid.Cell
                W={'span 2'}
                m-W={'span 2'}
                s-W={'span 2'}
                justify={'center'}
              >
                <FlightStops stops={stops} />
              </Grid.Cell>
              <Grid.Cell
                W={'span 2'}
                m-W={'span 2'}
                s-W={'span 2'}
                justify={'end'}
              >
                <PointDetails.Time time={arrival_time} />
              </Grid.Cell>
              <Grid.Cell W={'span 3'} m-W={'span 3'} s-W={'span 3'}>
                <PointDetails.Airport
                  isDeparture
                  code={origin}
                  city={origin_name}
                />
                <br />
                <PointDetails.Day date={departure_date} />
              </Grid.Cell>
              <Grid.Cell W={'span 3'} s-W={'span 3'} justify={'end'}>
                <PointDetails.Airport
                  code={destination}
                  city={destination_name}
                />
                <br />
                <PointDetails.Day date={arrival_date} />
              </Grid.Cell>
            </Grid>
          </TicketContent>
        </Grid.Cell>
      </Grid>
    </TicketWrapper>
  )
}

Ticket.propTypes = {
  origin: PropTypes.string,
  originName: PropTypes.string,
  destination: PropTypes.string,
  destinationName: PropTypes.string,
  departureDate: PropTypes.string,
  departureTime: PropTypes.string,
  arrivalDate: PropTypes.string,
  arrivalTime: PropTypes.string,
  carrier: PropTypes.string,
  stops: PropTypes.number,
  price: PropTypes.number,
}
