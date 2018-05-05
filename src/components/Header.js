import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import coinList from '../coinList';


// React-Autosuggest
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : coinList.filter(coinObj =>
    coinObj.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// React-Autosuggest
const getSuggestionValue = suggestion => suggestion.name;

// React-Autosuggest
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
    getCoinId: PropTypes.func.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired
  };

  // React-Autosuggest
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // React-Autosuggest
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // React-Autosuggest
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleSearch = event => {
    event.preventDefault();

    const coinName = this.searchInput.current.input.value
    console.log(`Searched for ${coinName}`);

    // get id for cryptoname from coinList
    let coinSearchTerm = this.props.getCoinId(coinName);

    // Redirect to Detail Coin view
    this.props.history.push(`/coin/${coinSearchTerm}`);

    // clear the input field by clearing the value state
    this.setState({ value: '' });
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
