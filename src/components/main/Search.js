import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import _ from 'lodash';
import { Input, Header, Label } from 'semantic-ui-react';

import coinList from '../../coinList';
import './style.css';


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
const escapeRegexCharacters = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// React-Autosuggest
const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim().toLowerCase());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');
  const isMatch = result => regex.test(result.name)

  return _.filter(coinList, isMatch);
};

// React-Autosuggest
const renderSuggestion = suggestion => {
  return (
    // <span>{suggestion.name}</span>
    <Header as='h4' key={suggestion.id}>
      {suggestion.name}
      <Label circular content={suggestion.symbol} />
    </Header>
  );
};

// React-Autosuggest
const getSuggestionValue = suggestion => suggestion.name;


class Search extends React.Component {
  state = {
    value: '',
    suggestions: [],
    selectedCoin: {}
  };

  // Ref for React-Autosuggest
  searchInput = React.createRef();

  static propTypes = {
    coins: PropTypes.object.isRequired,
    getCoinId: PropTypes.func.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired
  };

  // React-Autosuggest method
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
      selectedCoin: _.find(coinList, {name: newValue})
    });
  };

  // React-Autosuggest method
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // React-Autosuggest method
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  renderInput = (inputProps) => {
    return <Input icon='search' {...inputProps} />
  };

  onKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleSearch(e);
    }
  }

  handleSearch = event => {
    /*
      When form is submitted,
      redirect to detail coin view and
      clear input field.
    */

    event.preventDefault();

    // const coinName = this.searchInput.current.input.value
    // const coinName = this.state.value;
    const coinName = this.state.selectedCoin.name;
    console.log(`Searched for ${coinName}`);

    // get id for cryptoname from coinList
    // let coinSearchTerm = this.props.getCoinId(coinName);
    let coinSearchTerm = this.state.selectedCoin.id;
    const coins = this.props.coins;

    // Add coin
    if (coins[coinSearchTerm]) {
      void (0);
    }
    else {
      this.props.addOrUpdateCoin(coinSearchTerm, false);
    }

    // Redirect to Detail Coin view
    this.props.history.push(`/coin/${coinSearchTerm}`);

    // clear the input field by clearing the value state
    this.setState({ value: '', selectedCoin: {} });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search crypto',
      value,
      required: true,
      onChange: this.onChange,
      onKeyPress: this.onKeyPress
    };

    return (
      <div>
        <p>Search component</p>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderInputComponent={this.renderInput}
          inputProps={inputProps}
          ref={this.searchInput}
          />
      </div>
    );
  }
};

export default withRouter(Search);