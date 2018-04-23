import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import FrontPageCoin from "./FrontPageCoin";
import RefreshCoin from "./RefreshCoin";


class FrontPage extends React.Component {
	static propTypes = {
		coins: PropTypes.object,
		updateCoin: PropTypes.func
	};

	render() {
		const { coins, updateCoin } = this.props;
		return (
			<div>
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
						<RefreshCoin updateCoin={updateCoin} coinName={key} />
						</div>
					))}
				</ul>
			</div>
		);
	}
}

export default FrontPage;
