import React from 'react';
import PropTypes from 'prop-types';

import RefreshCoin from './RefreshCoin';


class DetailNews extends React.Component {
	static propTypes = {
		match: PropTypes.object,
		coins: PropTypes.object,
		updateCoin: PropTypes.func
	};

	render() {
		const { params } = this.props.match;
		const { coins, updateCoin } = this.props;
		// console.log(this.props);

		return (
			<div>
				<p>Detail page for {params.coinname}</p>
				<p>Price: {coins[params.coinname] ? coins[params.coinname].price : 'No price fetched yet'}</p>
				<p>News: {coins[params.coinname] ? coins[params.coinname].news : 'No news fetched yet'}</p>
				<RefreshCoin updateCoin={updateCoin} coinName={params.coinname}/>
			</div>
		);
	}
}

export default DetailNews;