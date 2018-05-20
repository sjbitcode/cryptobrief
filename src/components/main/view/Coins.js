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

  renderCoinElement = (obj, size='medium') => {
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
        <Button onClick={(event) => this.handleClick(obj.id, true, event)} key={obj.id} size={size} color='orange' style={button}>
          <div>{obj.name} ({obj.symbol})</div>
        </Button>
      );
    }
    else {
      return (
        <Button onClick={(event) => this.handleClick(obj.id, false, event)} size={size} color='green' inverted key={obj.id} style={button}>
          <div>{obj.name} ({obj.symbol})</div>
        </Button>
      );
    }
  };

  renderCoins = () => {
    return (
      <Container>
        <Grid textAlign='center' columns={1} stackable>
          <Grid.Column only="computer tablet" computer={16} tablet={16}>
            {coinList.map(obj => this.renderCoinElement(obj))}
          </Grid.Column>

          <Grid.Column only="mobile" mobile={16}>
            {coinList.map(obj => this.renderCoinElement(obj, 'mini'))}
          </Grid.Column>
        </Grid>

      </Container>
    );
  };

  renderTitle = () => {
    const styles = {
      svg: {
        default: {
          padding: '50px'
        },

        mobile: {
          maxWidth: '400px',
          margin: '0 auto'
        }
      },

      container: {
        paddingTop: '0px',
        paddingBottom: '30px'
      },

      gridContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      },

      description: {
        padding: '50px'
      }
    };

    return (
      <Container textAlign='center' style={styles.container}>
        <Grid columns={2} stackable style={styles.gridContainer}>

          {/* Computer Screen */}
          <Grid.Column only="computer" computer={8} style={styles.description}>
            <Header as='h1' content='Coin List' subheader={`We support ${coinList.length} coins through the Coin Market Cap API.`}/>
          </Grid.Column>
          <Grid.Column only="computer" computer={8}>
            <div style={styles.svg.default}>
              <Floating />
            </div>
          </Grid.Column>

          {/* Tablet Screen */}
          <Grid.Column only="tablet" tablet={8} style={styles.description}>
            <Header as='h1' content='Coin List' subheader={`We support ${coinList.length} coins through the Coin Market Cap API.`} />
          </Grid.Column>
          <Grid.Column only="tablet" tablet={8}>
            <div style={styles.svg.default}>
              <Floating />
            </div>
          </Grid.Column>

          {/* Mobile Screen */}
          <Grid.Column textAlign="center" only="mobile" mobile={16} style={styles.description}>
            <Header as='h1' content='Coin List' subheader={`We support ${coinList.length} coins through the Coin Market Cap API.`} />
          </Grid.Column>
          <Grid.Column textAlign="center" only="mobile" mobile={16}>
            <div style={{...styles.svg.default, ...styles.svg.mobile}}>
              <Floating />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    )
  };

  render() {
    return (
      <Segment raised>
        {this.renderTitle()}
        {this.renderCoins()}
      </Segment>
    );
  }
};

export default withRouter(Coins);
