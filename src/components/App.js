import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

class App extends Component {
	state = {
		coins: {
			bitcoin: {
				price: 8800,
				news: 'Bitcoin is going really good'
			},

			ethereum: {
				price: 580,
				news: 'Ethereum may take off in 2 days!'
			},

			ripple: {
				price: 0.78,
				news: 'Ripple set to be listed on 10 more exchanges...'
			}
		}
	};

	componentDidMount() {
		const localStorageRef = localStorage.getItem('cryptobrief');

		if (localStorageRef) {
			this.setState({coins: JSON.parse(localStorageRef)});
		}
		//localStorage.setItem('cryptobrief', JSON.stringify(this.state.coins));
	};

	componentDidUpdate() {
		localStorage.setItem('cryptobrief', JSON.stringify(this.state.coins));
	};

	addCoin = (coinData) => {
		/* {name: 'some-coin', price: 212, news: 'Some news about some-coin'} */

		// if coin doesn't exist, then add. we don't want to overwrite existing coins here.
		if (!this.state.coins[coinData.name]) {
			// Take a copy of state
			const coins = { ...this.state.coins };

			// Construct new coin object and set
			const data = { price: coinData.price, news: coinData.news };
			coins[coinData['name']] = data;

			// Update state
			this.setState({ coins });
		}
	};

	updateCoin = (coinData) => {
		// Take a copy of state
		const coins = { ...this.state.coins };

		// Construct new coin object and set
		const data = { price: coinData.price, news: coinData.news };
		coins[coinData['name']] = data;

		// Update state
		this.setState({ coins });
	}

	render() {
		return (
			<div>
				<Header addCoin={this.addCoin}/>
				<Main coins={this.state.coins} updateCoin={this.updateCoin}/>
			</div>
		);
	}
}

export default App;
