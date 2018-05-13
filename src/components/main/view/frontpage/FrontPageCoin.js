import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Label, Segment, Icon, Header } from 'semantic-ui-react';

import { epochToDate, formatISODate } from '../../../../api/helpers';
import RefreshCoin from '../RefreshCoin';


class FrontPageCoin extends React.Component {
  static propTypes = {
    coin: PropTypes.object.isRequired,
    coinId: PropTypes.string.isRequired,
    removeCoin: PropTypes.func.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired
  };

  // renderTickerData = (coinObj) => {
  //   const { ticker_data } = coinObj;

  //   return (
  //     <div>
  //       <p>symbol: {ticker_data.symbol}</p>
  //       <p>rank: {ticker_data.rank}</p>
  //       <p>price_usd: {ticker_data.price_usd}</p>
  //       <p>price_btc: {ticker_data.price_btc}</p>
  //       <p>percent_change_24h: {ticker_data.percent_change_24h}</p>
  //       <p>last_updated: {formatISODate(epochToDate(ticker_data.last_updated), true)}</p>
  //     </div>
  //   );
  // };

  // renderNewsData = (coinObj) => {
  //   const { news_data } = coinObj;
  //   const first_article = news_data.articles[0] || null;

  //   return (
  //     <div>
  //       {
  //         first_article ?
  //         (
  //           <React.Fragment>
  //           <p>{news_data.articles.length} articles found</p>
  //           <strong>{first_article.title}</strong>
  //           <i>{first_article.source.name}</i>
  //           </React.Fragment>
  //         ) :
  //         <p>No articles at this moment!</p>
  //       }
        
  //     </div>
  //   );
  // };

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
      }
    }

    return (
      <Segment style={styles.mainSegment}>
        <Grid columns={2}>

          <Grid.Column width={8}>
            <Header as='h1' textAlign='left'>
              {coin.displayName}
              <Label>{symbol}</Label>
              <RefreshCoin addOrUpdateCoin={addOrUpdateCoin} coinId={coinId}/>
            </Header>

            <Grid columns={2}>
              <Grid.Column textAlign='center'>
                <Grid.Row>
                  <Header as='h3' color='grey'>
                    ${price_usd}
                  </Header>
                </Grid.Row>
                <Grid.Row>
                  <Header as='h3' color='grey'>
                    {price_btc} BTC
                  </Header>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column textAlign='center'>
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

            <Label color={this.getRankColor(rank)} ribbon style={styles.ribbon}>Rank #{rank}</Label>
          </Grid.Column>

          <Grid.Column width={8}>
            <Label color='red' circular floating onClick={() => removeCoin(coinId)}>
              <Icon name='delete' style={styles.icon}/>
            </Label>

            {
              first_article ?
                (
                  <div>
                  {
                    first_article.urlToImage ? 
                    <Image src={first_article.urlToImage} size='small' floated='left' />
                    : null
                  }

                  <Header as='h4' textAlign='left'>
                    {first_article.title}
                    <Header.Subheader>
                      {first_article.source.name}
                    </Header.Subheader>
                  </Header>
                  <Label attached='bottom right'>+ {news_data.articles.length - 1} more articles</Label>
                  </div>
                ) :
                <Header as='h4' textAlign='left'>
                  No articles at this moment!
                </Header>
            }
          </Grid.Column>
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
