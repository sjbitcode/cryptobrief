import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';

import Vault from '../../svg/Vault';


class NotFound extends React.Component {
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
              Sorry, that pages does not exist!
            </Header>
          </Grid.Column>
          <Grid.Column only="computer" computer={8}>
            <div style={styles.svg.default}>
              <Vault />
            </div>
          </Grid.Column>

          {/* Tablet Screen */}
          <Grid.Column only="tablet" tablet={16} style={styles.description}>
            <Header as='h2'>
              Sorry, that pages does not exist!
            </Header>
          </Grid.Column>
          <Grid.Column only="tablet" tablet={16}>
            <div style={styles.svg.tablet}>
              <Vault />
            </div>
          </Grid.Column>

          {/* Mobile Screen */}
          <Grid.Column textAlign="center" only="mobile" mobile={16} style={styles.description}>
            <Header as='h1'>
              Sorry, that pages does not exist!
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="center" only="mobile" mobile={16}>
            <div style={{ ...styles.svg.default, ...styles.svg.mobile }}>
              <Vault />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default NotFound;