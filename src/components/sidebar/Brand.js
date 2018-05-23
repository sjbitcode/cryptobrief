import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import './style.css';
import '../../index.css';


class Brand extends React.Component {
  static propTypes = {
    mobile: PropTypes.bool
  };

  render() {
    const logo = {
      default: {
        margin: '24px',
        textAlign: 'center',
        color: 'white'
      },

      mobile: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '20px',
        letterSpacing: '1px'
      }
    };

    const { mobile } = this.props;

    return (
      <React.Fragment>
        {
          mobile ?
          <span style={logo.mobile}>cryptobrief</span> :
          <Header as='h2' style={logo.default} className="logo">cryptobrief</Header>
        }
      </React.Fragment>
    );
  }
}

export default Brand;