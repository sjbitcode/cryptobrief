import React from "react";
import PropTypes from "prop-types";

import RefreshCoin from "./RefreshCoin";
import { generateCoinData } from '../api/crypto-compare';


class DetailNews extends React.Component {
	state = {
		// coinData: {},
		// coinName: '',
		newCoin: false,
		coins: {}
	};

	static propTypes = {
		match: PropTypes.object,
		coins: PropTypes.object,
		updateCoin: PropTypes.func,
		addCoin: PropTypes.func
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('GET DERIVED STATE')
		console.log(nextProps);

		const coinName = nextProps.match.params.coinname;

		// Because App component mounts after this, so directly checking localStorage
		// const localStorageRef = localStorage.getItem('cryptobrief');

		// if (localStorageRef) {
		if (true) {
			// let coins = JSON.parse(localStorageRef);
			let coins = nextProps.coins;
			console.log(coins);
			if (!coins[coinName]) {
				const coinData = generateCoinData(coinName);
				coins[coinName] = { price: coinData.price, news: coinData.news };
				// localStorage.setItem('cryptobrief', JSON.stringify(coins));
				console.log('Adding coin to state!');
				// // 	// nextProps.addCoin(coinData);
				console.log('BELOW IS THE COINS THAT IM GOING TO ADD TO DETAIL NEWS STATE');
				console.log(coins);
				return { newCoin: true, coins: coins };
				
			}
			else {
				return {coins: coins};
			}
		}



		console.log('END DERIVED STATE');
		return null;
	};

	renderCoinInfo = (coinName) => {
		console.log('jhdfasjdfhadkjfhdals');
		console.log(`Going to get ${coinName} info`);
		console.log(this.state.coins);

		// return (
		// 	<React.Fragment>
		// 		<p>Price: {this.state.coins.coinName.price}</p>
		// 		<p>News: {this.state.coins.coinName.news}</p>
		// 	</React.Fragment>
		// );
		return (
			<React.Fragment>
				<p>Price: {this.state.coins[coinName].price}</p>
				<p>News: {this.state.coins[coinName].news}</p>
			</React.Fragment>
		);
	};

	renderCoinInfoWrapper = (coinName) => {
		console.log('INSIDE RENDER COININFO FUNCTON');
		console.log(this.state);
		return this.state.newCoin ?
		(
			<React.Fragment>
				<i>Adding {coinName} to your list!</i>
				{ this.renderCoinInfo(coinName) }
			</React.Fragment>
		) : this.renderCoinInfo(coinName);
	};

	render() {
		const { params } = this.props.match;
		const { updateCoin } = this.props;
		console.log('RENDER FUNCTION ', this.props);

		return (
			<div>
				<p>Detail page for {params.coinname}</p>
				{/* <p>
					Price: {coins[params.coinname]
						? coins[params.coinname].price
						: "No price fetched yet"}
				</p>
				<p>
					News: {coins[params.coinname]
						? coins[params.coinname].news
						: "No news fetched yet"}
				</p> */}
				{this.renderCoinInfoWrapper(params.coinname) }
				{/* {Object.keys(this.props.coins).map(key => (
					<p>{key}</p>
				))} */}
				<RefreshCoin
					updateCoin={updateCoin}
					coinName={params.coinname}
				/>
			</div>
		);
	}
}

export default DetailNews;
