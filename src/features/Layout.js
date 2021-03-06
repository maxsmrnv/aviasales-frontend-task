import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import Grid from '../components/Grid'
import * as actions from '../actions/actions'
import { connect } from 'react-redux'
import TicketList from './TicketsList'
import ControlPanel from './ControlPanel'

const LogoWrapper = styled.div`
  margin: 50px 0 36px 0;
`

const actionCreators = {
  fetchTickets: actions.fetchTickets,
}

class Layout extends React.Component {
  componentWillMount = () => {
    this.props.fetchTickets()
  }
  render() {
    return (
      <Grid.Container>
        <Grid templateCols={'repeat(12,1fr)'} s-W={'12 span'} gap={'0 24px'}>
          <Grid.Cell W={'span 12'} s-W={'span 12'} justify={'center'}>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </Grid.Cell>
          <Grid.Cell W={'2 / span 3'} s-W={'span 12'} justify={'center'}>
            <ControlPanel />
          </Grid.Cell>
          <Grid.Cell W={'5 / span 7'} s-W={'span 12'} justify={'center'}>
            <Grid gap={'20px'}>
              <TicketList />
            </Grid>
          </Grid.Cell>
        </Grid>
      </Grid.Container>
    )
  }
}

export default connect(
  null,
  actionCreators
)(Layout)
