import React from "react";
import { Route, Switch } from "react-router-dom";

import Coins from "./Coins";
import DetailNews from "./DetailNews";
import FrontPage from "./FrontPage";
import NotFound from "./NotFound";

class Main extends React.Component {
	render() {
		const { coins, updateCoin } = this.props;

		return (
			<Switch>
				<Route
					exact
					path="/"
					render={props => <FrontPage {...props} coins={coins} updateCoin={updateCoin} />}
				/>

				<Route path="/coins" component={Coins} />

				<Route
					path="/coin/:coinname"
					render={props => <DetailNews {...props} coins={coins} updateCoin={updateCoin} />}
				/>

				<Route component={NotFound} />
			</Switch>
		);
	}
}

export default Main;
