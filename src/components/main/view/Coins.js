import React from 'react';
import { withRouter } from 'react-router-dom';
import { Header, Segment, Container, Grid, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import coinList from '../../../coinList';
import Floating from '../../svg/Floating';


class Coins extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    coins: PropTypes.object.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired
  };

  handleClick = (coinId, exists=false, event) => {
    /*
      Given a coin id, add coin depending
      on if it exists and redirect to Detail view.
    */

    event.preventDefault();
    if (!exists) {
      this.props.addOrUpdateCoin(coinId, false);
    }
    this.props.history.push(`/coin/${coinId}`);
  };

  renderCoinElement = (obj) => {
    /*
      Render all coins from coin list.
      If a coin exists in state, apply a special style.
    */

    // special style for button that represent an existing coin.
    const button = {
      margin: '12px'
    };

    if (obj.id in this.props.coins) {
      return (
        <Button onClick={(event) => this.handleClick(obj.id, true, event)} key={obj.id} color='orange' style={button}>
          <div>{obj.name} ({obj.symbol})</div>
        </Button>
      );
    }
    else {
      return (
        <Button onClick={(event) => this.handleClick(obj.id, false, event)} color='green' inverted key={obj.id} style={button}>
          <div>{obj.name} ({obj.symbol})</div>
        </Button>
      );
    }
  };

  renderCoins = () => {
    return (
      <Container>
        {coinList.map(obj => this.renderCoinElement(obj))}
      </Container>
    );
  };

  renderTitle = () => {
    const styles = {
      svg: {
        margin: '0 auto',
        maxWidth: '300px',
        paddingTop: '30px'
      },

      container: {
        paddingTop: '0px',
        paddingBottom: '30px'
      },

      description: {
        padding: '100px'
      }
    };

    return (
      <Container textAlign='center' style={styles.container}>
        <Grid columns={2}>
          <Grid.Column style={styles.description}>
            <Header as='h1'>
              Coin List
            </Header>
            <p>
              We support {coinList.length} coins through the Coin Market Cap API.
            </p>
          </Grid.Column>

          <Grid.Column>
            <div style={styles.svg}>
              <Floating />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    )
  };

  render() {
    return (
      <Segment>
        {this.renderTitle()}
        {this.renderCoins()}
      </Segment>
    );
  }
};

export default withRouter(Coins);
