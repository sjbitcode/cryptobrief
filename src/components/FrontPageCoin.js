import React from 'react';
import PropTypes from 'prop-types';


class FrontPageCoin extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    details: PropTypes.object
  };

  render() {
    const { name, details } = this.props;

    return (
      <div>
        <h3>{name}</h3>
        <p>{details.price}</p>
        <p>{details.news}</p>
      </div>
    );
  }
}

export default FrontPageCoin;
