import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FrontPageCoin from './FrontPageCoin';
import RefreshCoin from '../RefreshCoin';


class FrontPage extends React.Component {
  static propTypes = {
    coins: PropTypes.object.isRequired,
    removeCoin: PropTypes.func.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired
  };

  renderFrontPageCoins = () => {
    const { coins, removeCoin, addOrUpdateCoin } = this.props;

    if (Object.keys(coins).length) {
      return (
        <React.Fragment>
          <strong>Your crypto brief: {Object.keys(coins).length}</strong>
          <h1>Here's the news</h1>
          <ul>
            {Object.keys(coins).map(key => (
              <div key={key}>
                <Link to={`/coin/${key}`}>
                  <FrontPageCoin
                    key={key}
                    coin={coins[key]}
                  />
                </Link>
                <button onClick={() => removeCoin(key)}>Remove coin from list</button>
                <RefreshCoin addOrUpdateCoin={addOrUpdateCoin} coinId={key} />
              </div>
            ))}
          </ul>
        </React.Fragment>
      );
    }
    else {
      console.log('No coins');
      return <div>Looks like you haven't searched for anything yet!</div>
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
