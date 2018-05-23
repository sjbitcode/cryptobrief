import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Header } from 'semantic-ui-react';

import FileSearch from '../../../svg/FileSearch';


class SearchPrompt extends React.Component {
  static propTypes = {
    button: PropTypes.element
  };

  render() {
    const styles = {
      svg: {
        default: {
          padding: '50px'
        },

        tablet: {
          padding: '0 50px',
          maxWidth: '400px',
          margin: '0 auto'
        },

        mobile: {
          maxWidth: '400px',
          margin: '0 auto'
        }
      },

      container: {
        paddingTop: '0px',
        paddingBottom: '30px'
      },

      gridContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      },

      description: {
        padding: '50px'
      }
    };

    return (
      <Container textAlign='center' style={styles.container}>
        <Grid columns={2} stackable style={styles.gridContainer}>

          {/* Computer Screen */}
          <Grid.Column only="computer" computer={8} style={styles.description}>
            <Header as='h1'>
              Looks like you haven't searched for this coin yet!
            </Header>
            {this.props.button}
          </Grid.Column>
          <Grid.Column only="computer" computer={8}>
            <div style={styles.svg.default}>
              <FileSearch />
            </div>
          </Grid.Column>

          {/* Tablet Screen */}
          <Grid.Column only="tablet" tablet={16} style={styles.description}>
            <Header as='h2'>
              Looks like you haven't searched for this coin yet!
            </Header>
            {this.props.button}
          </Grid.Column>
          <Grid.Column only="tablet" tablet={16}>
            <div style={styles.svg.tablet}>
              <FileSearch />
            </div>
          </Grid.Column>

          {/* Mobile Screen */}
          <Grid.Column textAlign="center" only="mobile" mobile={16} style={styles.description}>
            <Header as='h1'>
              Looks like you haven't searched for this coin yet!
            </Header>
            {this.props.button}
          </Grid.Column>
          <Grid.Column textAlign="center" only="mobile" mobile={16}>
            <div style={{ ...styles.svg.default, ...styles.svg.mobile }}>
              <FileSearch />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default SearchPrompt;