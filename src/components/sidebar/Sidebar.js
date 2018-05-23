import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import MenuItems from './MenuItems';
import '../../index.css';


class Sidebar extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    coins: PropTypes.object.isRequired
  };

  render() {
    const { coins, vertical, fixed, width, fluid } = this.props;

    const styles = {
      mainMenu: {
        borderRadius: '0'
      }
    };

    return (
      <Menu fluid={fluid} inverted vertical={vertical} fixed={fixed} width={width} style={styles.mainMenu} className="sidebar-component">
        <MenuItems coins={coins} mobile={false}/>
      </Menu>
    );
  }
}

export default withRouter(Sidebar);