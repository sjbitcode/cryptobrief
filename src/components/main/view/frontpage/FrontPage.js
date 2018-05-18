import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Container, Grid } from 'semantic-ui-react';

import News from '../../../svg/News';
import Initial from './Initial';
import FrontPageCoin from './FrontPageCoin';


class FrontPage extends React.Component {
  static propTypes = {
    coins: PropTypes.object.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired
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

          {/* Computer & Tablet Screen */}
          <Grid.Column only="computer tablet" computer={8} tablet={8}>
            <div style={styles.svg.default}>
              <News />
            </div>
          </Grid.Column>
          <Grid.Column only="computer tablet" computer={8} tablet={8} style={styles.description}>
            <Header as='h1' content='Your Front Page' subheader='Check the latest below from your curated list of cryptos.'/>
          </Grid.Column>

          {/* Mobile Screen */}
          <Grid.Column textAlign="center" only="mobile" mobile={16} style={{ order: 1 }}>
            <div style={{...styles.svg.default, ...styles.svg.mobile}}>
              <News />
            </div>
          </Grid.Column>
          <Grid.Column textAlign="center" only="mobile" mobile={16} style={styles.description}>
            <Header as='h1' content='Your Front Page' subheader='Check the latest below from your curated list of cryptos.' />
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
                  removeCoin={removeCoin}
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
