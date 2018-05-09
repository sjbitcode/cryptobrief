import React from 'react';
import PropTypes from 'prop-types';

import Brand from './Brand';
import Footer from './Footer';
import Nav from './Nav';


class Sidebar extends React.Component {
  static propTypes = {
    coins: PropTypes.object.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <Brand/>
        <Nav coins={this.props.coins} />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Sidebar;