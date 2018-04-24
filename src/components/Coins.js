import React from 'react';
import PropTypes from "prop-types";

import coinList from '../coinList';


class Coins extends React.Component {
	static propTypes = {
		coins: PropTypes.object
	};

	renderCoinElement = (obj) => {
		const divStyle = {
			color: 'white',
			backgroundColor: 'blue',
			margin: '10px 0'
		};

		if (obj.id in this.props.coins) {
			return <div key={obj.id} style={divStyle}>{obj.name} ({obj.symbol})</div>
		}
		else {
			return <div key={obj.id}>{obj.name} ({obj.symbol})</div>
		}
	};

	render() {
		return (
			<React.Fragment>
				{coinList.map(obj => this.renderCoinElement(obj))}
			</React.Fragment>
		);
	}
};

export default Coins;