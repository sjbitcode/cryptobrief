import React from 'react';
import { Header } from 'semantic-ui-react';


class Brand extends React.Component {
  render() {
    const logo = {
      margin: '30px',
      textAlign: 'center'
    };

    return (
      <React.Fragment>
        <Header as='h2' style={logo}>Brand Component</Header>
      </React.Fragment>
    );
  }
}

export default Brand;