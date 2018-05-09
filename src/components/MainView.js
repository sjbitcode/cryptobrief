import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import About from './About';
import Coins from './Coins';
import DetailNews from './DetailNews';
import FrontPage from './FrontPage';
import NotFound from './NotFound';


const MainView = ({ 
  coins,
  addOrUpdateCoin,
  removeCoin,
  getCoinName 
}) => 
(
  <Switch>
    <Route
      exact
      path="/"
      render={props =>
        <FrontPage 
          {...props}
          coins={coins}
          removeCoin={removeCoin}
          addOrUpdateCoin={addOrUpdateCoin} 
        />
      }
    />

    <Route
      path="/coins"
      render={props =>
        <Coins
          coins={coins}
          addOrUpdateCoin={addOrUpdateCoin}
        />
      }
    />

    <Route
      path="/coin/:coinId"
      render={props =>
        <DetailNews
          {...props}
          coins={coins}
          getCoinName={getCoinName}
          addOrUpdateCoin={addOrUpdateCoin}
        />
      }
    />


    <Route path="/about" component={About}></Route>

    <Route component={NotFound} />
  </Switch>
);

MainView.propTypes = {
  coins: PropTypes.object.isRequired,
  addOrUpdateCoin: PropTypes.func.isRequired,
  removeCoin: PropTypes.func.isRequired,
  getCoinName: PropTypes.func.isRequired
};

export default MainView;
