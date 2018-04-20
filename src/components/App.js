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

	render() {
		return (
			<div>
				<Header />
				<Main coins={this.state.coins}/>
			</div>
		);
	}
}

export default App;
