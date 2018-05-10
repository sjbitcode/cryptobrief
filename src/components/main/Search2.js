import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import _ from 'lodash'
import { Search, Label, Grid, Header, SearchResult } from 'semantic-ui-react';

import coinList from '../../coinList';


// React-Autosuggest
// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : coinList.filter(coinObj =>
//     coinObj.name.toLowerCase().slice(0, inputLength) === inputValue
//   );
// };

// // React-Autosuggest
// const getSuggestionValue = suggestion => suggestion.name;

// // React-Autosuggest
// const renderSuggestion = suggestion => (
//   <div>
//     {suggestion.name}
//   </div>
// );

class Search2 extends React.Component {
  state = {
    // value: '',
    // suggestions: []
    isLoading: false,
    results: [],
    selectedCoin: {},
    value: ''
  };

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '', selectedCoin: {} });

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.name, selectedCoin: result });
    // console.log(result);
    this.handleSearchResultClick(e);
  };

  handleSearchResultClick = (e) => {
    e.preventDefault();
    // console.log(data);

    const coinId = this.state.selectedCoin.id;
    console.log(`COIN ID.....${coinId}`);
    const coins = this.props.coins;

    // Add coin
    if (coins[coinId]) {
      void (0);
    }
    else {
      this.props.addOrUpdateCoin(coinId, false);
    }

    // Redirect to Detail Coin view
    this.props.history.push(`/coin/${coinId}`);

    // clear the input field by clearing the value state
    this.resetComponent();
  };

  // handleSearch = event => {
  //   /*
  //     When form is submitted,
  //     redirect to detail coin view and
  //     clear input field.
  //   */

  //   event.preventDefault();

  //   const coinName = this.searchInput.current.input.value
  //   console.log(`Searched for ${coinName}`);

  //   // get id for cryptoname from coinList
  //   let coinSearchTerm = this.props.getCoinId(coinName);
  //   const coins = this.props.coins;

  //   // Add coin
  //   if (coins[coinSearchTerm]) {
  //     void (0);
  //   }
  //   else {
  //     this.props.addOrUpdateCoin(coinSearchTerm, false);
  //   }

  //   // Redirect to Detail Coin view
  //   this.props.history.push(`/coin/${coinSearchTerm}`);

  //   // clear the input field by clearing the value state
  //   this.setState({ value: '' });
  // };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      // const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const re = new RegExp('^' + this.state.value, 'i');
      console.log(`RE IS ${re}`);
      const isMatch = result => re.test(result.name)

      this.setState({
        isLoading: false,
        results: _.filter(coinList, isMatch)
      })
    }, 300);
  };

  onSelectionChange = (e, { result }) => {
    console.log('onSelectionChange');
    // console.log(result);
    this.setState({ value: result.name });
  };

  handleRenderResults = (resObj) => {
    // console.log(resObj);
    return (
      <React.Fragment>
        <Header as='h4' key={resObj.id}>
          {resObj.name}
          <Label circular content={resObj.symbol} />
        </Header>
      </React.Fragment>
    );
  }

  // // Ref for React-Autosuggest
  // searchInput = React.createRef();

  // static propTypes = {
  //   coins: PropTypes.object.isRequired,
  //   getCoinId: PropTypes.func.isRequired,
  //   addOrUpdateCoin: PropTypes.func.isRequired
  // };

  // // React-Autosuggest method
  // onChange = (event, { newValue }) => {
  //   this.setState({
  //     value: newValue
  //   });
  // };

  // // React-Autosuggest method
  // onSuggestionsFetchRequested = ({ value }) => {
  //   this.setState({
  //     suggestions: getSuggestions(value)
  //   });
  // };

  // // React-Autosuggest method
  // onSuggestionsClearRequested = () => {
  //   this.setState({
  //     suggestions: []
  //   });
  // };

  

  render() {
    // const { value, suggestions } = this.state;
    const { isLoading, value, results } = this.state;

    // Autosuggest will pass through all these props to the input.
    // const inputProps = {
    //   placeholder: 'Type a crypto-currency',
    //   value,
    //   required: true,
    //   onChange: this.onChange
    // };

    return (
      <Grid>
        <Grid.Column width={10}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            // onSelectionChange={this.onSelectionChange}
            resultRenderer={this.handleRenderResults}
            results={results}
            size='big'
            placeholder='Search crypto'
            value={value}
            // {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
};

export default withRouter(Search2);