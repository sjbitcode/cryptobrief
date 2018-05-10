import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class Nav extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    coins: PropTypes.object.isRequired
  };

  render() {
    const { coins } = this.props;

    return (
      <div>
        <nav>
          <h2>
            <Link to="/">Crypto Brief</Link>
          </h2>
          <ul>
            <li>
              <Link to="/">Front Page</Link>
              {
                coins ?
                (
                  <ul>
                  {Object.keys(coins).map(key => (
                    <li key={key}><Link to={`/coin/${key}`}>{key}</Link></li>
                  ))}
                  </ul>
                ) : null
              }
            </li>
            <li>
              <Link to="/coins">Coins</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default withRouter(Nav);