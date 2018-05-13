import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

import '../style.css';


class RefreshCoin extends React.Component {
  static propTypes = {
    addOrUpdateCoin: PropTypes.func.isRequired,
    coinId: PropTypes.string.isRequired
  };

  refreshData = event => {
    /*
      Update coin data.
    */

    event.preventDefault();
    this.props.addOrUpdateCoin(this.props.coinId, true);
  };

  render() {
    const styles = {
      // margin: '0',
      cursor: 'pointer'
    }

    return (
      // <form onSubmit={this.refreshData}>
      //   <button type="submit">Refresh</button>
      // </form>
      <Label icon='refresh' color='teal' onClick={this.refreshData} style={styles}/>
    );
  }
}

export default RefreshCoin;
