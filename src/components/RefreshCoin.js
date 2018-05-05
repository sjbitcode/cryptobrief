import React from 'react';
import PropTypes from 'prop-types';


class RefreshCoin extends React.Component {
  static propTypes = {
    addOrUpdateCoin: PropTypes.func.isRequired,
    coinId: PropTypes.string.isRequired
  };

  refreshData = event => {
    event.preventDefault();
    this.props.addOrUpdateCoin(this.props.coinId, true);
  };

  render() {
    return (
      <form onSubmit={this.refreshData}>
        <button type="submit">Refresh</button>
      </form>
    );
  }
}

export default RefreshCoin;
