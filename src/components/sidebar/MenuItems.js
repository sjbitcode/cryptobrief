import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Menu, Label } from 'semantic-ui-react';

import Brand from './Brand';
import Footer from './Footer';


class MenuItems extends React.Component {
  static propTypes = {
    coins: PropTypes.object.isRequired,
    mobile: PropTypes.bool
  };

  render() {
    const { coins, mobile } = this.props;
    const coinsLength = Object.keys(coins).length;
    const styles = {
      mainMenu: {
        borderRadius: '0'
      },
      frontPageCoins: {
        color: '#8ec5ef'
      },
      activeLink: {
        fontWeight: 'bold'
      },
      footer: {
        position: 'absolute',
        bottom: '0',
        width: '100%'
      }
    };

    return (
      <React.Fragment>
      
      {
        !mobile ? 
        <Menu.Item as={NavLink} to='/' exact id="brand">
          <Brand mobile={false} />
        </Menu.Item> : null
      }
      
      <Menu.Item as={NavLink} to='/' exact activeStyle={styles.activeLink}>
        Front Page
        {
          !mobile ?
          <Label color='green'>{Object.keys(coins).length}</Label> : null
        }
      </Menu.Item>

      <Menu.Item as={NavLink} to='/coins' activeStyle={styles.activeLink}>
        Coins
      </Menu.Item>

      <Menu.Item as={NavLink} to='/about' activeStyle={styles.activeLink}>
        About
      </Menu.Item>

      {
      coinsLength !== 0 ?
        <Menu.Item>
          <Menu.Menu>
            {
              Object.keys(coins).map(key =>
                <Menu.Item as={NavLink} key={key} to={`/coin/${key}`} style={styles.frontPageCoins}>
                  {coins[key].displayName}
                </Menu.Item>
              )
            }
          </Menu.Menu>
        </Menu.Item> : null
      }

    <Menu.Item style={styles.footer}>
      <Footer />
    </Menu.Item>

    </React.Fragment>
    );
  }
}

export default MenuItems;