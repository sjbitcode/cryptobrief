import React from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

import Brand from './Brand';
import MenuItems from './MenuItems';


class NavBarMobile extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    coins: PropTypes.object,
    onPusherClick: PropTypes.func,
    onToggle: PropTypes.func,
    visible: PropTypes.bool
  };

  render() {
    const { children, coins, onPusherClick, onToggle, visible } = this.props;

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
          className="sidebar-component"
        >
          <MenuItems coins={coins} mobile={true}/>
        </Sidebar>
        <Sidebar.Pusher
          dimmed={visible}
          onClick={onPusherClick}
          style={{ minHeight: "100vh" }}
        >
          <Menu fixed="top" inverted className="sidebar-component">
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

