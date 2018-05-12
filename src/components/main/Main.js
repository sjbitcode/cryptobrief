import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Container } from 'semantic-ui-react';

import Search from './Search';
import MainView from './view/MainView';


class Main extends React.Component {
  static propTypes = {
    coins: PropTypes.object.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired,
    removeCoin: PropTypes.func.isRequired,
    getCoinName: PropTypes.func.isRequired,
    getCoinId: PropTypes.func.isRequired
  };

  render() {

    const styles = {

      footer: {
        // position: 'absolute',
        // position: 'absolute',
        // left: '0px',
        bottom: '0px',
        // height: '50px',
        width: '100%,'
      },

      mainGrid: {
        margin: '0 auto',
        padding: '50px'
      },

      searchGrid: {
        margin: '0 auto',
        padding: '50px 50px 0 50px'
      },

      getStarted: {
        margin: '0 auto',
        padding: '50px',
        background: '#2b9f77',
        color: 'white',
        textAlign: 'center'
      }
    };

    const totalCoins = Object.keys(this.props.coins).length;

    return (
      <Container>
        <Container>
      
        <Grid divided='vertically' style={styles.searchGrid}>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Search coins={this.props.coins} getCoinId={this.props.getCoinId} addOrUpdateCoin={this.props.addOrUpdateCoin} />
            </Grid.Column>

            <Grid.Column>
              <Button inverted color='blue' floated='right'>
                {totalCoins} {totalCoins === 1 ? 'coin' : 'coins'}
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      <Grid style={styles.mainGrid}>
        <Grid.Row>
          <Grid.Column>
            <MainView coins={this.props.coins} addOrUpdateCoin={this.props.addOrUpdateCoin} removeCoin={this.props.removeCoin} getCoinName={this.props.getCoinName} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Container>

      <Container style={styles.footer}>
      {
        totalCoins === 0 ?
          <Container style={styles.getStarted}>
            <Button inverted size='big' onClick={() => window.scrollTo(0, 0)}>Get started now</Button>
          </Container> : 
          <Container style={styles.getStarted}>
            <Button inverted size='big' onClick={() => window.scrollTo(0, 0)}>Search for another coin</Button>
          </Container>
      }
      </Container>
      </Container>
    );
  }
};

export default Main;