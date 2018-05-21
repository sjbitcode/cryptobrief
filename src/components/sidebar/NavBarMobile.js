import React from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import { Container, Icon, Image, Menu, Sidebar, Label } from "semantic-ui-react";
import _ from "lodash";

import Brand from './Brand';
import Footer from './Footer';
import MenuItems from './MenuItems';


class NavBarMobile extends React.Component {
  render() {
    const { coins, children, leftItems, onPusherClick, onToggle, rightItems, visible } = this.props;
    const coinsLength = Object.keys(coins).length;
    // const styles = {
    //   mainMenu: {
    //     borderRadius: '0'
    //   },
    //   frontPageCoins: {
    //    color: 'pink'
    //   },
    //   activeLink: {
    //     fontWeight: 'bold'
    //   },
    //   footer: {
    //     position: 'absolute',
    //     bottom: '0',
    //     width: '100%'
    //   }
    // };

    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          direction="right"
          width="thin"
          icon="labeled"
          inverted
          vertical
          visible={visible}
        >
          <MenuItems coins={coins} mobile={true}/>
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          onClick={onPusherClick}
          style={{ minHeight: "100vh" }}
        >
          <Menu fixed="top" inverted>
            <Menu.Item as={NavLink} to='/' exact>
              <Brand mobile={true} />
            </Menu.Item>
            <Menu.Item onClick={onToggle} position="right">
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
};

export default NavBarMobile;

