import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Segment, Container, Grid } from 'semantic-ui-react';

import News from '../../../svg/News';
import Initial from './Initial';
import FrontPageCoin from './FrontPageCoin';
import RefreshCoin from '../RefreshCoin';


class FrontPage extends React.Component {
  static propTypes = {
    coins: PropTypes.object.isRequired,
    removeCoin: PropTypes.func.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired
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
        padding: '100px 80px 100px 80px'
      }
    };

    return (
        <Container textAlign='center'>
          <Grid columns={2}>
            <Grid.Column>
              <div style={styles.svg}>
                <News />
              </div>
            </Grid.Column>
            <Grid.Column style={styles.description}>
              <Header as='h1'>
                Your Front Page
                <Header.Subheader>
                  Check the latest below from your curated list of cryptos.
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }

  renderFrontPageCoins = () => {
    const { coins, removeCoin, addOrUpdateCoin } = this.props;

    if (Object.keys(coins).length) {
      return (
        <Segment>
          {this.renderTitle()}
          {Object.keys(coins).map(key => (
            <div key={key}>
                <FrontPageCoin
                  key={key}
                  coinId={key}
                  coin={coins[key]}
                  removeCoin={this.props.removeCoin}
                  addOrUpdateCoin={addOrUpdateCoin}
                />
            </div>
          ))}
        </Segment>
      );
    }
    else {
      return <Initial/>
    }
  };

  render() {
    return (
      <div>
        {this.renderFrontPageCoins()}
      </div>
    );
  }
}

export default FrontPage;
