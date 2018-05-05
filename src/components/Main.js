import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Coins from './Coins';
import DetailNews from './DetailNews';
import FrontPage from './FrontPage';
import NotFound from './NotFound';


const Main = ({ coins, addOrUpdateCoin, removeCoin }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => <FrontPage {...props} coins={coins} removeCoin={removeCoin} addOrUpdateCoin={addOrUpdateCoin} />}
    />

    <Route
      path="/coins"
      render={props => <Coins coins={coins} />}
    />

    <Route
      path="/coin/:coinname"
      render={props => <DetailNews {...props} coins={coins} addOrUpdateCoin={addOrUpdateCoin} />}
    />

    <Route component={NotFound} />
  </Switch>
);

Main.propTypes = {
  coins: PropTypes.object.isRequired,
  addOrUpdateCoin: PropTypes.func.isRequired
};

export default Main;
