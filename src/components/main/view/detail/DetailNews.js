import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Image, Label, Segment, Icon, Header, Item, Dimmer, Loader, Button } from 'semantic-ui-react';

import RefreshCoin from '../RefreshCoin';
import SearchPrompt from './SearchPrompt';
import placeholderImage from '../../../../images/pattern.png';
import { epochToDate, formatISODate } from '../../../../utils/helpers';
import { getRankColor, getPercentColor, renderLocaleString } from '../../../../utils/helpers';
import './style.css';


class DetailNews extends React.Component {
  state = {
    newCoin: false
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    coins: PropTypes.object.isRequired,
    getCoinName: PropTypes.func.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const coinId = nextProps.match.params.coinId;
    const coins = nextProps.coins;

    if (!coins[coinId]) {
      return { newCoin: true };
    }
    else {
      return { newCoin: false };
    }
  };

  handleNewCoinSearch(event, coinId) {
    /*
      Add new coin.
    */

    event.preventDefault();
    this.props.addOrUpdateCoin(coinId, false);
    this.setState({ newCoin: false });
  };

  renderCoinInfo = (coinId) => {
    /*
      Given a coin id, render the coin info.
    */
    const { params } = this.props.match;
    const { addOrUpdateCoin } = this.props;

    const coin = this.props.coins[coinId];
    const {  
      newsDataIsLoading,
      tickerDataIsLoading,
      news_data,
      ticker_data
    } = coin;

    const volume_24_hr_usd = coin.ticker_data['24h_volume_usd'];

    const {
      name, symbol, rank,
      price_usd, price_btc,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d,
      market_cap_usd,
      total_supply,
      available_supply,
      max_supply,
      last_updated
    } = ticker_data;

    const { articles } = news_data

    const styles = {
      heading: {
        flexContainer: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'baseline',
        },

        row: {
          paddingTop: '0px',
          paddingBottom: '0px'
        },

        symbol: {
          padding: '0 5px'
        }
      },

      infoGrid: {
        flexContainer: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center'
        },

        row: {
          width: '200px !important'
        },

        grey: {
          color: '#767676'
        },

        first: {
          paddingTop: '5rem'
        },
        second: {
          paddingTop: '2rem',
          paddingBottom: '3rem'
        }
      },

      mainSegment: {
        margin: '40px 0'
      },

      icon: {
        margin: '0'
      },

      ribbon: {
        marginTop: '15px'
      }
    }

    return (
      <React.Fragment>
        <Segment raised padded style={styles.mainSegment} loading={tickerDataIsLoading}>
          <RefreshCoin
            coinId={params.coinId}
            addOrUpdateCoin={addOrUpdateCoin}
          />

          <Grid columns={1} centered textAlign="center">
            <Grid.Row style={styles.heading.row}>
              <Grid.Column width={16} style={styles.heading.flexContainer}>
                <Header as="h1">
                  {
                    coin.displayName ? (
                      coin.displayName
                    ) : name
                  }
                </Header>
                <Header as="h3" color="grey" content={`(${symbol})`} style={styles.heading.symbol}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={styles.heading.row}>
              <Grid.Column width={16} style={styles.heading.flexContainer}>
                <Label color={getRankColor(rank)}>Rank #{rank}</Label>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={styles.heading.row}>
              <Grid.Column style={styles.heading.flexContainer}>

                {
                  price_usd ?
                  <React.Fragment>
                    <Header as="h2">
                      {renderLocaleString(price_usd, true)}
                    </Header>

                    <Header as="h5">
                      USD
                    </Header>
                  </React.Fragment> :

                  <Header as="h5">
                    price (USD) N/A
                  </Header>
                }
                
                {
                  percent_change_24h ?
                  <Header as="h2" color={getPercentColor(percent_change_24h)} style={styles.heading.symbol}>
                    ({percent_change_24h}%)
                  </Header> : null
                }
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={styles.heading.row}>
              <Grid.Column style={styles.heading.flexContainer}>
                {
                  price_btc ?
                  <Header as='h5'>
                    {price_btc} BTC
                  </Header> :
                  <Header as='h5'>
                     price (BTC) N/A
                  </Header> 
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid columns={4} padded centered stackable container style={{...styles.infoGrid.first, ...styles.infoGrid.flexContainer}} className="flexContainer">
            <Grid.Column textAlign="center" style={styles.infoGrid.row} id="flexItem">
              <Grid.Row><Header as="h3" content="Market Cap" textAlign="center" /></Grid.Row>
              {
                market_cap_usd ?
                <Grid.Row><Header as="h4" color="grey">{renderLocaleString(market_cap_usd, true)}</Header></Grid.Row> :
                <Grid.Row><Header as="h4" color="grey">N/A</Header></Grid.Row>

              }
            </Grid.Column>

            <Grid.Column textAlign="center" style={styles.infoGrid.row} id="flexItem">
              <Grid.Row><Header as="h3" content="Volume (24hr)" textAlign="center" /></Grid.Row>
              {
                volume_24_hr_usd ?
                <Grid.Row><Header as="h4" color="grey">{renderLocaleString(volume_24_hr_usd, true)}</Header></Grid.Row> :
                <Grid.Row><Header as="h4" color="grey">N/A</Header></Grid.Row>
              }
            </Grid.Column>

            <Grid.Column textAlign="center" style={styles.infoGrid.row} id="flexItem">
              <Grid.Row><Header as="h3" content="Circulating Supply" textAlign="center" /></Grid.Row>
              {
                available_supply ?
                <Grid.Row><Header as="h4" color="grey">{renderLocaleString(available_supply, false)}</Header></Grid.Row> :
                <Grid.Row><Header as="h4" color="grey">N/A</Header></Grid.Row>
              }
            </Grid.Column>

            <Grid.Column textAlign="center" style={styles.infoGrid.row} id="flexItem">
              <Grid.Row><Header as="h3" content="Max Supply" textAlign="center" /></Grid.Row>
              {
                max_supply ?
                <Grid.Row><Header as="h4" color="grey">{renderLocaleString(max_supply, false)}</Header></Grid.Row> :
                <Grid.Row><Header as="h4" color="grey">no maximum</Header></Grid.Row>
              }
            </Grid.Column>
          </Grid>

          <Grid columns={3} padded centered stackable container style={{...styles.infoGrid.second, ...styles.infoGrid.flexContainer}} className="flexContainer">
            <Grid.Column textAlign="center" style={styles.infoGrid.row} id="flexItem">
              <Grid.Row><Header as="h3" content="Percent (1hr)" textAlign="center" /></Grid.Row>
              {
                percent_change_1h ?
                <Grid.Row><Header as="h4" color={getPercentColor(percent_change_1h)}>{percent_change_1h}%</Header></Grid.Row> :
                <Grid.Row><Header as="h4" color="grey">N/A</Header></Grid.Row>
              }
            </Grid.Column>

            <Grid.Column textAlign="center" style={styles.infoGrid.row} id="flexItem">
              <Grid.Row><Header as="h3" content="Percent (24hr)" textAlign="center" /></Grid.Row>
              {
                percent_change_24h ?
                <Grid.Row><Header as="h4" color={getPercentColor(percent_change_24h)}>{percent_change_24h}%</Header></Grid.Row> :
                <Grid.Row><Header as="h4" color="grey">N/A</Header></Grid.Row>
              }
            </Grid.Column>

            <Grid.Column textAlign="center" style={styles.infoGrid.row} id="flexItem">
              <Grid.Row><Header as="h3" content="Percent (7d)" textAlign="center" /></Grid.Row>
              {
                percent_change_7d ?
                <Grid.Row><Header as="h4" color={getPercentColor(percent_change_7d)}>{percent_change_7d}%</Header></Grid.Row> :
                <Grid.Row><Header as="h4" color="grey">N/A</Header></Grid.Row>
              }
            </Grid.Column>
          </Grid>

          {last_updated ? <Label attached='bottom right'>last updated {formatISODate(epochToDate(last_updated), true)}</Label> : null}
        </Segment>
      
        <Segment raised padded style={styles.mainSegment} loading={newsDataIsLoading}>
        {
          (articles) ?
          (

              <Item.Group divided relaxed='very'>
              {
                Object.keys(articles).length !== 0 ?
                (
                  articles.map((article, index) => 
                    <Item key={index}>
                      <Item.Image size="medium" src={article.urlToImage || placeholderImage} />

                      <Item.Content verticalAlign='middle'>
                        {
                          article.title ? 
                          <Item.Header as='h2'>{article.title}</Item.Header> :
                          <Item.Header as='h2'>Article Title N/A</Item.Header>
                        }

                        <Item.Meta>
                          {
                            article.source.name ?
                            <Label content={article.source.name} /> :
                            <Label content="source N/A" />
                          }
                        </Item.Meta>

                        <Item.Description style={{ fontStyle: 'italic' }}>
                          {
                            article.description ? article.description : 'Article description N/A'
                          }
                        </Item.Description>

                        <Item.Extra>
                          {
                            article.publishedAt ?
                            <Label basic color="grey" icon='calendar' content={formatISODate(article.publishedAt)} className="articleIcon" /> :
                            <Label basic color="grey" icon='calendar' content="N/A" className="articleIcon" />
                          }

                          {
                            article.author ?
                            <Label basic color="grey" icon='compose' content={article.author} className="articleIcon"/> :
                            <Label basic color="grey" icon='compose' content="N/A" className="articleIcon"/>
                          }

                          {
                            article.url ?
                            <a href={article.url} style={{ float: 'right' }} target='_blank' rel="noopener noreferrer"><Icon name="external" floated='right'/></a> :
                            null
                          }
                        </Item.Extra>
                      </Item.Content>
                    </Item>
                  ) 
                ): 
                <Header as='h3' textAlign='center' icon color="grey">
                  <Icon name="newspaper" />
                  No articles at this moment!
                </Header>
              }
            </Item.Group>

          ) : null
          
        }
        </Segment>
      </React.Fragment>
    );
  };

  renderNewCoinSearchPrompt = (coinId) => {
    /*
      Render a form to call a search for the given coin id.
    */

    const coinName = this.props.getCoinName(coinId);
    const valueText = `Search for ${coinName}`;

    return (
      <SearchPrompt button={<Button color="yellow" onClick={(event) => this.handleNewCoinSearch(event, coinId)}>{valueText}</Button>}/>
    );
    
  };

  renderCoinInfoWrapper = (coinId) => {
    /* 
      Render new coin prompt or coin info
      depending on if coin already exists.
    */

    const { newCoin } = this.state;

    return (
      <React.Fragment>
        {
          newCoin ? (
            this.renderNewCoinSearchPrompt(coinId)
          ) : this.renderCoinInfo(coinId)
        }
      </React.Fragment>
    );
  };

  render() {
    const { params } = this.props.match;

    return (
      <div>
        {this.renderCoinInfoWrapper(params.coinId)}
      </div>
    );
  }
}

export default DetailNews;
