import React from 'react';
import { withRouter } from 'react-router-dom';
import { Header, Segment, Container, Grid, Button, Pagination } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import coinList from '../../../coinList';
import Floating from '../../svg/Floating';


class Coins extends React.Component {
  state = {
    coinsPerPage: 50,
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    totalPages: 0,
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    coins: PropTypes.object.isRequired,
    addOrUpdateCoin: PropTypes.func.isRequired
  };

  componentDidMount() {

    const totalCoins = Object.keys(coinList).length;
    const { coinsPerPage } = this.state;

    const totalPages = Math.ceil(totalCoins / coinsPerPage);
    this.setState({ totalPages });
  };

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  handleClick = (coinId, exists=false, event) => {
    /*
      Given a coin id, add coin depending
      on if it exists and redirect to Detail view.
    */

    event.preventDefault();
    if (!exists) {
      this.props.addOrUpdateCoin(coinId, false);
    }
    this.props.history.push(`/coin/${coinId}`);
  };

  renderCoinElement = (obj, size='medium') => {
    /*
      Render all coins from coin list.
      If a coin exists in state, apply a special style.
    */

    // special style for button that represent an existing coin.
    const button = {
      margin: '12px'
    };

    if (obj.id in this.props.coins) {
      return (
        <Button onClick={(event) => this.handleClick(obj.id, true, event)} key={obj.id} size={size} color='orange' style={button}>
          <div>{obj.name} ({obj.symbol})</div>
        </Button>
      );
    }
    else {
      return (
        <Button onClick={(event) => this.handleClick(obj.id, false, event)} size={size} color='green' inverted key={obj.id} style={button}>
          <div>{obj.name} ({obj.symbol})</div>
        </Button>
      );
    }
  };

  renderCoins = () => {
    const {
      coinsPerPage,
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages,
    } = this.state

    // Logic for displaying todos
    const indexOfLastCoin = activePage * coinsPerPage;
    const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
    const currentCoins = coinList.slice(indexOfFirstCoin, indexOfLastCoin);

    return (
      <Container>
        <Grid textAlign='center' columns={1} stackable>
          <Grid.Column only="computer tablet" computer={16} tablet={16}>
            {currentCoins.map(obj => this.renderCoinElement(obj))}

            <Container textAlign="center" style={{ paddingTop: '5rem' }}>
              <Pagination
                activePage={activePage}
                totalPages={totalPages}
                boundaryRange={boundaryRange}
                onPageChange={this.handlePaginationChange}
                size='mini'
                siblingRange={siblingRange}
                ellipsisItem={showEllipsis ? undefined : null}
                firstItem={showFirstAndLastNav ? undefined : null}
                lastItem={showFirstAndLastNav ? undefined : null}
                prevItem={showPreviousAndNextNav ? undefined : null}
                nextItem={showPreviousAndNextNav ? undefined : null}
              />
            </Container>
          </Grid.Column>

          <Grid.Column only="mobile" mobile={16}>
            {currentCoins.map(obj => this.renderCoinElement(obj, 'mini'))}

            <Container textAlign="center" style={{ paddingTop: '5rem' }}>
              <Pagination
                activePage={activePage}
                totalPages={totalPages}
                boundaryRange={boundaryRange}
                onPageChange={this.handlePaginationChange}
                size='mini'
                siblingRange={siblingRange}
                ellipsisItem={showEllipsis ? undefined : null}
                firstItem={null}
                lastItem={null}
                prevItem={null}
                nextItem={null}
              />
            </Container>
          </Grid.Column>
        </Grid>

        {/* <Container textAlign="center" style={{ paddingTop: '5rem' }}>
          <Pagination
            activePage={activePage}
            totalPages={totalPages}
            boundaryRange={boundaryRange}
            onPageChange={this.handlePaginationChange}
            size='mini'
            siblingRange={siblingRange}
            ellipsisItem={showEllipsis ? undefined : null}
            firstItem={showFirstAndLastNav ? undefined : null}
            lastItem={showFirstAndLastNav ? undefined : null}
            prevItem={showPreviousAndNextNav ? undefined : null}
            nextItem={showPreviousAndNextNav ? undefined : null}
          />
        </Container> */}
        
      </Container>
    );
  };

  renderTitle = () => {
    const styles = {
      svg: {
        default: {
          padding: '50px'
        },

        tablet: {
          padding: '0 50px',
          maxWidth: '400px',
          margin: '0 auto'
        },

        mobile: {
          maxWidth: '400px',
          margin: '0 auto'
        }
      },

      container: {
        paddingTop: '0px',
        paddingBottom: '30px'
      },

      gridContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      },

      description: {
        padding: '50px'
      }
    };

    return (
      <Container textAlign='center' style={styles.container}>
        <Grid columns={2} stackable style={styles.gridContainer}>

          {/* Computer Screen */}
          <Grid.Column only="computer" computer={8} style={styles.description}>
            <Header as='h1' content='Coin List' subheader={`We support ${coinList.length} coins through the Coin Market Cap API.`}/>
          </Grid.Column>
          <Grid.Column only="computer" computer={8}>
            <div style={styles.svg.default}>
              <Floating />
            </div>
          </Grid.Column>

          {/* Tablet Screen */}
          <Grid.Column only="tablet" tablet={16} style={styles.description}>
            <Header as='h1' content='Coin List' subheader={`We support ${coinList.length} coins through the Coin Market Cap API.`} />
          </Grid.Column>
          <Grid.Column only="tablet" tablet={16}>
            <div style={styles.svg.tablet}>
              <Floating />
            </div>
          </Grid.Column>

          {/* Mobile Screen */}
          <Grid.Column textAlign="center" only="mobile" mobile={16} style={styles.description}>
            <Header as='h1' content='Coin List' subheader={`We support ${coinList.length} coins through the Coin Market Cap API.`} />
          </Grid.Column>
          <Grid.Column textAlign="center" only="mobile" mobile={16}>
            <div style={{...styles.svg.default, ...styles.svg.mobile}}>
              <Floating />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    )
  };

  render() {
    return (
      <Segment raised>
        {this.renderTitle()}
        {this.renderCoins()}
      </Segment>
    );
  }
};

export default withRouter(Coins);
