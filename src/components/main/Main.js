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

      mainGrid: {
        margin: '0 auto'
      },

      searchGrid: {
        margin: '0 auto'
      },

      getStarted: {
        margin: '0 auto',
        textAlign: 'center'
      }
    };

    const totalCoins = Object.keys(this.props.coins).length;

    return (
      <Container>
        <Container>
          {/* Search Bar & Coins Label */}
          <Grid divided='vertically' style={styles.searchGrid}>
            <Grid.Row columns={2}>

              {/* Computer & Tablet Screen */}
              <Grid.Column only="computer tablet">
                <Search coins={this.props.coins} getCoinId={this.props.getCoinId} addOrUpdateCoin={this.props.addOrUpdateCoin} />
              </Grid.Column>
              <Grid.Column only="computer tablet">
                <Button inverted color='blue' floated='right'>
                  {totalCoins} {totalCoins === 1 ? 'coin' : 'coins'}
                </Button>
              </Grid.Column>

              {/* Mobile Screen */}
              <Grid.Column only="mobile" mobile={16} style={{ paddingTop: '20px' }}>
                <Search coins={this.props.coins} getCoinId={this.props.getCoinId} addOrUpdateCoin={this.props.addOrUpdateCoin} />
              </Grid.Column>
              <Grid.Column only="mobile" className="mobile hidden">
                <Button inverted color='blue' floated='right'>
                  {totalCoins} {totalCoins === 1 ? 'coin' : 'coins'}
                </Button>
              </Grid.Column>

            </Grid.Row>
          </Grid>
      
          {/* Main View Grid */}
          <Grid style={styles.mainGrid}>
            <Grid.Row>
              <Grid.Column>
                <MainView coins={this.props.coins} addOrUpdateCoin={this.props.addOrUpdateCoin} removeCoin={this.props.removeCoin} getCoinName={this.props.getCoinName} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      
        {/* Prompt Button */}
        <Grid>
          <Grid.Row>
            <Grid.Column>
            {
              totalCoins === 0 ?

              <Container style={styles.getStarted}>
                <Button fluid color='green' size='big' onClick={() => window.scrollTo(0, 0)}>Get started now</Button>
              </Container> :

              <Container style={styles.getStarted}>
                <Button fluid color='green' size='big' onClick={() => window.scrollTo(0, 0)}>Search for another coin</Button>
              </Container>
            }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
};

export default Main;