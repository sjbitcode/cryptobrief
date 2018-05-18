import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Label, Segment, Icon, Header } from 'semantic-ui-react';

import { epochToDate, formatISODate } from '../../../../api/helpers';
import RefreshCoin from '../RefreshCoin';
import './style.css';


class FrontPageCoin extends React.Component {
  static propTypes = {
    coin: PropTypes.object.isRequired,
    coinId: PropTypes.string.isRequired,
    removeCoin: PropTypes.func.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired
  };

  getRankColor = (rank) => {
    rank = parseInt(rank, 10);
    console.log(rank);
    if (rank > 50) {
      console.log(`${rank} is getting the color red`);
      return 'red'
    }
    else if (26 <= rank && rank <= 50) {
      console.log(`${rank} is getting the color yellow`);
      return 'yellow'
    }
    else if (11 <= rank && rank <= 25) {
      console.log(`${rank} is getting the color blue`);
      return 'blue'
    }
    else if (1 <= rank && rank <= 10) {
      console.log(`${rank} is getting the color green`);
      return 'green'
    }
  };

  getPercentColor = (percentChange) => {
    percentChange = parseFloat(percentChange);
    if (percentChange < 0) {
      return 'red'
    }
    else {
      return 'green'
    }
  };

  renderFancy = () => {
    const { coin, coinId, removeCoin, addOrUpdateCoin } = this.props;

    const { news_data } = coin;
    const first_article = news_data.articles[0] || null;
    const { ticker_data } = coin;
    const { symbol, price_usd, price_btc, percent_change_1h, percent_change_24h, rank } = ticker_data;

    const styles = {
      mainSegment: {
        margin: '40px 0'
      },

      icon: {
        margin: '0'
      },

      ribbon: {
        marginTop: '15px'
      },

      deleteButton: {
        default: {
          float: 'right'
        }
      },

      mobile: {
        header: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        },

        flexContainer: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        },

        flexItem: {
          width: '200px !important',
          textAlign: 'center'
        }
      },

      news: {
        mobile: {
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '30px',
          justifyContent: 'space-between',
          alignItems: 'center'
        }
      }
    }

    return (
      <Segment style={styles.mainSegment}>
        <Grid stackable columns={2}>

          {/* Heading and Delete button */}
          <Grid.Row>
            <Grid.Column only="computer tablet" computer={8} tablet={8}>
              <Header as='h1' textAlign='left'>
                {coin.displayName}
                <Label>{symbol}</Label>
                <RefreshCoin addOrUpdateCoin={addOrUpdateCoin} coinId={coinId} />
              </Header>
            </Grid.Column>

            <Grid.Column only="computer tablet" computer={8} tablet={8}>
              <Label color='red' circular onClick={() => removeCoin(coinId)} style={styles.deleteButton.default}>
                <Icon name='delete' style={styles.icon} />
              </Label>
            </Grid.Column>

            <Grid.Column only="mobile" mobile={8} style={styles.mobile.header}>
              <Header as='h1' textAlign='left'>
                {coin.displayName}
                <Label>{symbol}</Label>
                <RefreshCoin addOrUpdateCoin={addOrUpdateCoin} coinId={coinId} />
              </Header>
              <Label color='red' circular onClick={() => removeCoin(coinId)}>
                <Icon name='delete' style={styles.icon} />
              </Label>
            </Grid.Column>
          </Grid.Row>

          {/* Price and News */}
          <Grid.Row>
            <Grid.Column only="computer tablet" width={8}>
              <Grid padded stackable columns={2} container>

                <Grid.Column only="computer tablet" computer={8} tablet={16} textAlign='left'>
                  <Grid.Row>
                    <Header as='h4' color='grey'>
                      Price
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color='black'>
                      {price_usd} (USD)
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color='black'>
                      {price_btc} (BTC)
                    </Header>
                  </Grid.Row>
                </Grid.Column>

                <Grid.Column only="computer tablet" computer={8} tablet={16} textAlign='left' float="right">
                  <Grid.Row>
                    <Header as='h4' color='grey'>
                      Percent Change
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color={this.getPercentColor(percent_change_1h)}>
                      {(parseFloat(percent_change_1h) >= 0) ? '+' : null}{percent_change_1h}% (1 hr)
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color={this.getPercentColor(percent_change_24h)}>
                      {(parseFloat(percent_change_24h) >= 0) ? '+' : null}{percent_change_24h}% (24 hr)
                    </Header>
                  </Grid.Row>
                </Grid.Column>

                <Grid.Column only="mobile" mobile={8} textAlign='left'>
                  <Grid.Row>
                    <Header as='h4' color='grey'>
                      Price
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color='black'>
                      {price_usd} (USD)
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color='black'>
                      {price_btc} (BTC)
                    </Header>
                  </Grid.Row>
                </Grid.Column>

                <Grid.Column only="mobile" mobile={8} textAlign='left'>
                  <Grid.Row>
                    <Header as='h4' color='grey'>
                      Percent Change
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color={this.getPercentColor(percent_change_1h)}>
                      {(parseFloat(percent_change_1h) >= 0) ? '+' : null}{percent_change_1h}% (1 hr)
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color={this.getPercentColor(percent_change_24h)}>
                      {(parseFloat(percent_change_24h) >= 0) ? '+' : null}{percent_change_24h}% (24 hr)
                    </Header>
                  </Grid.Row>
                </Grid.Column>

              </Grid>

            </Grid.Column>

            <Grid.Column only="mobile" width={8}>
              <Grid padded container columns={2} style={styles.mobile.flexContainer} className="flexWrapper">
                <Grid.Column only="mobile" mobile={8} style={styles.mobile.flexItem} id="flexItem">
                  <Grid.Row>
                    <Header as='h4' color='grey'>
                      Price
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color='black'>
                      {price_usd} (USD)
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color='black'>
                      {price_btc} (BTC)
                    </Header>
                  </Grid.Row>
                </Grid.Column>

                <Grid.Column only="mobile" mobile={8} style={styles.mobile.flexItem} id="flexItem">
                  <Grid.Row>
                    <Header as='h4' color='grey'>
                      Percent Change
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color={this.getPercentColor(percent_change_1h)}>
                      {(parseFloat(percent_change_1h) >= 0) ? '+' : null}{percent_change_1h}% (1 hr)
                    </Header>
                  </Grid.Row>
                  <Grid.Row>
                    <Header as='h3' color={this.getPercentColor(percent_change_24h)}>
                      {(parseFloat(percent_change_24h) >= 0) ? '+' : null}{percent_change_24h}% (24 hr)
                    </Header>
                  </Grid.Row>
                  </Grid.Column>
              </Grid>
            </Grid.Column>

            <Grid.Column width={8}>
              {
                first_article ?
                  (
                    // <div style={styles.news.mobiles}>
                    <div>
                    <Grid columns={2} container padded style={styles.mobile.flexContainer}>
                    {
                      first_article.urlToImage ? 
                      <React.Fragment>
                      <Grid.Column only="computer" computer={8}>
                        <Image src={first_article.urlToImage} size='small' floated='left' />
                      </Grid.Column>

                      <Grid.Column only="tablet" tablet={16}>
                        <Image src={first_article.urlToImage} size='small' floated='left' />
                      </Grid.Column>

                              <Grid.Column textAlign="center" only="mobile" mobile={8} style={styles.mobile.flexItem} id="flexItem">
                        <Image src={first_article.urlToImage} size='small' floated='left' />
                      </Grid.Column>
                      </React.Fragment>
                      : null
                    }
                    <Grid.Column only="computer" computer={8}>
                      <Header as='h4' textAlign='left'>
                        {first_article.title}
                        <Header.Subheader>
                          {first_article.source.name}
                        </Header.Subheader>
                      </Header>
                    </Grid.Column>

                    <Grid.Column only="tablet" tablet={16}>
                      <Header as='h4' textAlign='left'>
                        {first_article.title}
                        <Header.Subheader>
                          {first_article.source.name}
                        </Header.Subheader>
                      </Header>
                    </Grid.Column>

                    <Grid.Column textAlign="center" only="mobile" mobile={8} style={styles.mobile.flexItem} id="flexItem">
                      <Header as='h4' textAlign='left'>
                        {first_article.title}
                        <Header.Subheader>
                          {first_article.source.name}
                        </Header.Subheader>
                      </Header>
                    </Grid.Column>

                    </Grid>
                    {/* <Label attached='bottom right'>+ {news_data.articles.length - 1} more articles</Label> */}
                    </div>
                  ) :
                  <Header as='h4' textAlign='left'>
                    No articles at this moment!
                  </Header>
              }
            </Grid.Column>
          </Grid.Row>

          {/* Rank and more articles */}
          <Grid.Row>
            <Grid.Column>
              <Label color={this.getRankColor(rank)} ribbon style={styles.ribbon}>Rank #{rank}</Label>
            </Grid.Column>

            <Grid.Column>
              <Label attached='bottom right'>+ {news_data.articles.length - 1} more articles</Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  };

  render() {
    return (
      <div>
        {this.renderFancy()}
      </div>
    );
  }
}

export default FrontPageCoin;
