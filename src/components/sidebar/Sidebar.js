import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, Menu, Label, Responsive } from 'semantic-ui-react';

import Brand from './Brand';
import Footer from './Footer';
import MenuItems from './MenuItems';
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
        color: 'pink'
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
      <Menu fluid={fluid} inverted vertical={vertical} fixed={fixed} width={width} style={styles.mainMenu}>

        {/* <Menu.Item as={NavLink} to='/' exact id="brand">
          <Brand mobile={false}/>
        </Menu.Item>

        <Menu.Item as={NavLink} to='/' exact activeStyle={styles.activeLink}>
          Front Page
          <Label color='blue'>{Object.keys(coins).length}</Label>
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
        </Menu.Item> */}
        <MenuItems coins={coins} mobile={false}/>

      </Menu>
    );
  }
}

export default withRouter(Sidebar);