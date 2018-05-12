import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, Menu, Label } from 'semantic-ui-react';

import Brand from './Brand';
import Footer from './Footer';


class Sidebar extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    coins: PropTypes.object.isRequired
  };

  render() {
    const { coins } = this.props;
    const coinsLength = Object.keys(coins).length;

    const styles = {
      mainMenu: {
        width: 'inherit',
        minHeight: '100 %',
        position: 'relative'
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
      <Menu inverted vertical fixed='left' style={styles.mainMenu}>

        <Menu.Item as={NavLink} to='/' exact style={styles.logoSection} activeStyle={styles.logoSection}>
          <Brand />
        </Menu.Item>

        <Menu.Item>
          
          <NavLink to='/' exact>Front Page</NavLink>
          
          <Label color='blue'>{Object.keys(coins).length}</Label>
          {
            coinsLength !== 0 ?
              <Menu.Menu style={styles.frontPageCoins}>
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

        <Menu.Item style={styles.footer}>
          <Footer />
        </Menu.Item>
        
      </Menu>
    );
  }
}

export default withRouter(Sidebar);