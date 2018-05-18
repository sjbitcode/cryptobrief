import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';
import RefreshCoin from '../RefreshCoin';
import TickerDetail from './TickerDetail';
import placeholderImage from '../../../../images/pattern.png';


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

  renderNewsData = (coinObj, loading) => {
    /*
      If articles exist and is a non-empty object, show articles, 
      else show 'No articles...' message.
    */
   
    const { articles } = coinObj.news_data;

    return(
      <div>
      {
        loading ?
        <p>LOADING</p> :
        ( 
          (articles) ? 
          (
            Object.keys(articles).length !== 0 ?
            articles.map((article, index) => <Article key={index} article={article} />) :
            <p>No articles at the moment!</p>
          ) : null
        )
      }
      </div>
    );
  };

  renderTickerData = (coinObj, loading) => {
    const { ticker_data } = coinObj;

    return (
      <div>
        {
          loading ?
          <p>LOADING</p> :
          <TickerDetail tickerData={ticker_data} />
        }
      </div>
    );
  };

  renderCoinInfo = (coinId) => {
    /*
      Given a coin id, render the coin info.
    */

    return (
      <React.Fragment>
        <p>Detail Page for {
            this.props.coins[coinId].displayName ? (
            this.props.coins[coinId].displayName
            ) : this.props.match.params.coinId
          }
        </p>

        <div>PRICE INFO: {
          this.renderTickerData(this.props.coins[coinId], this.props.coins[coinId].tickerDataIsLoading)
        }
        </div>

        <div>NEWS INFO: {
          this.renderNewsData(this.props.coins[coinId], this.props.coins[coinId].newsDataIsLoading)
        }
        </div>
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
      <div>
        Looks like you havent searched for this coin yet.
        <form onSubmit={(event) => this.handleNewCoinSearch(event, coinId)}>
          <input type="submit" value={valueText}/>
        </form>
      </div>
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
    const { addOrUpdateCoin } = this.props;

    return (
      <div>
        {this.renderCoinInfoWrapper(params.coinId)}
        <RefreshCoin
          coinId={params.coinId}
          addOrUpdateCoin={addOrUpdateCoin}
        />
      </div>
    );
  }
}

export default DetailNews;
