import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, Menu, Label } from 'semantic-ui-react';

import Brand from './Brand';
import Footer from './Footer';
import './style.css';


class Sidebar extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    coins: PropTypes.object.isRequired
  };

  render() {
    const { coins, vertical, fixed, width, fluid } = this.props;
    const coinsLength = Object.keys(coins).length;

    const styles = {
      mainMenu: {
        borderRadius: '0'
      },
      frontPageCoins: {
        marginTop: '15px',
        active: {
          background: 'blue'
        }
      },
      logoSection: {
        background: '#d4d4d5'
      },
      activeLink: {
        background: 'red'
      },
      footer: {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        // height: '60px'
      }
    };

    return (
      <Menu fluid={fluid} inverted vertical={vertical} fixed={fixed} width={width} style={styles.mainMenu}>

        <Menu.Item as={NavLink} to='/' exact style={styles.logoSection} activeStyle={styles.logoSection} className="mobile hidden">
          <Brand />
        </Menu.Item>

        <Menu.Item>
          
          <NavLink to='/' exact>Front Page</NavLink>
          
          <Label color='blue'>{Object.keys(coins).length}</Label>
          {
            coinsLength !== 0 ?
              <Menu.Menu className="mobile hidden" style={styles.frontPageCoins}>
                {Object.keys(coins).map(key =>
                  <Menu.Item
                    as={ NavLink }
                    key={key}
                    to={`/coin/${key}`}
                    activeStyle={styles.frontPageCoins.active}
                  >
                  {coins[key].displayName}
                  </Menu.Item>
                )}
              </Menu.Menu>
              : null
          }
        </Menu.Item>

        <Menu.Item as={NavLink} to='/coins' activeStyle={styles.activeLink}>
          <Icon name='bitcoin' />
          <Menu.Header>Coins</Menu.Header>
        </Menu.Item>

        <Menu.Item as={NavLink} to='/about' activeStyle={styles.activeLink}>
          <Icon name='idea' />
          <Menu.Header>About</Menu.Header>
        </Menu.Item>

        <Menu.Item style={styles.footer} className="mobile hidden">
          <Footer />
        </Menu.Item>
        
      </Menu>
    );
  }
}

export default withRouter(Sidebar);