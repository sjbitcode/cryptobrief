import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FrontPageCoin from './FrontPageCoin';
import RefreshCoin from './RefreshCoin';


class FrontPage extends React.Component {
  static propTypes = {
    coins: PropTypes.object,
    updateCoin: PropTypes.func,
    removeCoin: PropTypes.func
  };

  renderRemoveButton = (coinName) => {
    if (!['bitcoin', 'ethereum', 'ripple'].includes(coinName)) {
      return <button onClick={() => this.props.removeCoin(coinName)}>Remove coin from list</button>
    }
  };

  renderFrontPageCoins = () => {
    const { coins, updateCoin } = this.props;

    if (Object.keys(coins).length) {
      return (
        <React.Fragment>
          <h1>Here's the news</h1>
          <ul>
            {Object.keys(coins).map(key => (
              <div key={key}>
                <Link to={`/coin/${key}`}>
                  <FrontPageCoin
                    key={key}
                    details={coins[key]}
                    name={key}
                  />
                </Link>
                <button onClick={() => this.props.removeCoin(key)}>Remove coin from list</button>
                <RefreshCoin updateCoin={updateCoin} coinName={key} />
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
