import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';

import coinList from '../coinList';
import { generateCoinData } from '../api/crypto-compare';


// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0 ? [] : coinList.filter(coinObj =>
		coinObj.name.toLowerCase().slice(0, inputLength) === inputValue
	);
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
	<div>
		{suggestion.name}
	</div>
);


class Header extends React.Component {
	
	state = {
		value: '',
		suggestions: []
	};

	searchInput = React.createRef();

	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired,
		addCoin: PropTypes.func
	};

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value)
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	handleSearch = event => {
		event.preventDefault();

		const coinName = this.searchInput.current.input.value
		console.log(`Searched for ${coinName}`);

		// get id for cryptoname
		let coinSearchTerm = '';
		try {
			const coinObj = coinList.find(obj => obj.name === coinName);
			coinSearchTerm = coinObj.id;
		}
		catch(err) {
			coinSearchTerm = coinName.trim().toLowerCase();
		}

		// Add coin
		const coinData = generateCoinData(coinSearchTerm);
		this.props.addCoin(coinData);

		// Redirect to Detail Coin view
		this.props.history.push(`/coin/${coinSearchTerm}`);
		
		// clear the input field by clearing the value state
		this.setState({value: ''})
	};

	render() {
		const { location } = this.props;
		const { value, suggestions } = this.state;

		// Autosuggest will pass through all these props to the input.
		const inputProps = {
			placeholder: 'Type a crypto-currency',
			value,
			required: true,
			onChange: this.onChange
		};

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
						<Autosuggest
							suggestions={suggestions}
							onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
							onSuggestionsClearRequested={this.onSuggestionsClearRequested}
							getSuggestionValue={getSuggestionValue}
							renderSuggestion={renderSuggestion}
							inputProps={inputProps}
							ref={this.searchInput}
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
