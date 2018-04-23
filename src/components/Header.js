import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { generateCoinData } from '../api/crypto-compare';


class Header extends React.Component {
	searchInput = React.createRef();

	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired,
		addCoin: PropTypes.func
	};

	handleSearch = event => {
		console.log(`Searched for ${this.searchInput.current.value}`);
		event.preventDefault();
		const coinName = this.searchInput.current.value;

		// Add coin
		const coinData = generateCoinData(coinName);
		this.props.addCoin(coinData);

		this.props.history.push(`/coin/${coinName}`);

		// Refresh the form
		event.currentTarget.reset();
	};

	render() {
		const { location } = this.props;

		return (
			<div>
				<nav>
					<h2>
						<Link to="/">Crypto Brief</Link>
					</h2>
					<ul>
						<li>
							<Link to="/">Front Page</Link>
						</li>
						<li>
							<Link to="/coins">Popular Coins</Link>
						</li>
					</ul>

					<form onSubmit={this.handleSearch}>
						<input
							type="text"
							ref={this.searchInput}
							required
							placeholder="Coin Name"
						/>
						<button type="submit">Search</button>
					</form>
				</nav>

				{location.pathname}
			</div>
		);
	}
}

export default withRouter(Header);
