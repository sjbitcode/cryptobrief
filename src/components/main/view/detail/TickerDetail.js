import React from 'react';
import PropTypes from 'prop-types';

// import { epochToDate, formatISODate } from '../api/helpers';
import { epochToDate, formatISODate } from '../../../../api/helpers';


class TickerDetail extends React.Component {
  static propTypes = {
    tickerData: PropTypes.object.isRequired
  };

  render() {
    const { tickerData } = this.props;

    return (
      <div>
        <p>symbol: {tickerData.symbol}</p>
        <p>rank: {tickerData.rank}</p>
        <p>price_usd: {tickerData.price_usd}</p>
        <p>price_btc: {tickerData.price_btc}</p>
        <p>24 hour volume: {tickerData['24h_volume_usd']}</p>
        <p>market_cap_usd: {tickerData.market_cap_usd}</p>
        <p>available_supply: {tickerData.available_supply}</p>
        <p>max_supply: {tickerData.max_supply}</p>
        <p>percent_change_1h: {tickerData.percent_change_1h}</p>
        <p>percent_change_24h: {tickerData.percent_change_24h}</p>
        <p>percent_change_7d: {tickerData.percent_change_7d}</p>
        <p>last_updated: {formatISODate(epochToDate(tickerData.last_updated), true)}</p>
      </div>
    );
  }
};

export default TickerDetail;