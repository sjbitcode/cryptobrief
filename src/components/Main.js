import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import Coins from "./Coins";
import DetailNews from "./DetailNews";
import FrontPage from "./FrontPage";
import NotFound from "./NotFound";

class Main extends React.Component {
	static propTypes = {
		coins: PropTypes.object,
		updateCoin: PropTypes.func,
		addCoin: PropTypes.func,
		removeCoin: PropTypes.func
	};

	render() {
		const { coins, updateCoin, addCoin, removeCoin } = this.props;

		return (
			<Switch>
				<Route
					exact
					path="/"
					render={props => <FrontPage {...props} coins={coins} updateCoin={updateCoin} removeCoin={removeCoin} />}
				/>

				<Route 
					path="/coins"
					render={props => <Coins coins={coins} />} 
				/>

				<Route
					path="/coin/:coinname"
					render={props => <DetailNews {...props} coins={coins} updateCoin={updateCoin} addCoin={addCoin} />}
				/>

				<Route component={NotFound} />
			</Switch>
		);
	}
}

export default Main;
