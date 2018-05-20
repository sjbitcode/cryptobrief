import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Header, Segment } from 'semantic-ui-react';

import Finance from '../../../svg/Finance';
import Ethereum from '../../../svg/Ethereum';


class Initial extends React.Component {
  render() {
    const styles = {
      segmentContainer: {
        display: 'flex',
        flexDirection: 'column'
      },

      gridContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      },

      svg: {
        default: {
          padding: '50px'
        },

        mobile: {
          maxWidth: '400px',
          margin: '0 auto'
        }
      },

      description: {
        padding: '50px',
      }

    };

    return (
      <Segment style={styles.segmentContainer} raised>

        {/* First SVG & text */}
        <Container>
          <Grid columns={2} stackable style={styles.gridContainer}>

            {/* Computer Screen */}
            <Grid.Column only="computer"  computer={8} style={styles.description}>
              <Header as='h1'>
                Keep track of your favorite cryptocurrencies
                <Header.Subheader>
                  Have a coffee, then monitor the crypto that you invested
                  a large chunk of your birthday money in.
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column only="computer" computer={8} >
              <div style={styles.svg.default}>
                <Finance />
              </div>
            </Grid.Column>

            {/* Tablet Screen */}
            <Grid.Column only="tablet" tablet={16} style={styles.description}>
              <Header as='h1'>
                Keep track of your favorite cryptocurrencies
                <Header.Subheader>
                  Have a coffee, then monitor the crypto that you invested
                  a large chunk of your birthday money in.
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column only="tablet" tablet={16} >
              <div style={styles.svg.default}>
                <Finance />
              </div>
            </Grid.Column>

            {/* Mobile Screen */}
            <Grid.Column textAlign="center" only="mobile" mobile={16} style={styles.description}>
              <Header as='h1' textAlign="center">
                Keep track of your favorite cryptocurrencies
                <Header.Subheader>
                  Have a coffee, then monitor the crypto that you invested
                  a large chunk of your birthday money in.
                </Header.Subheader>
              </Header>
            </Grid.Column>
            <Grid.Column textAlign="center" only="mobile" mobile={16} >
              <div style={{ ...styles.svg.default, ...styles.svg.mobile}}>
                <Finance />
              </div>
            </Grid.Column>
          </Grid>
        </Container>
        
        {/* Second SVG & text */}
        <Container>
          <Grid columns={2} stackable style={styles.gridContainer}>

            {/* Computer Screen */}
            <Grid.Column only="computer" computer={8} floated='left' >
              <div style={styles.svg.default}>
                <Ethereum/>
              </div>
            </Grid.Column>
            <Grid.Column only="computer" computer={8} floated='right' style={styles.description}>
              <Header as='h1'>
                Read the latest headlines and articles
                <Header.Subheader>
                  The news brought to you has been aggregated from over 20 financial news sources. Read more over <Link to='/about'>here</Link>.
                </Header.Subheader>
              </Header>
            </Grid.Column>

            {/* Tablet Screen */}
            <Grid.Column only="tablet" tablet={16} floated='left' style={{ order: 1 }}>
              <div style={styles.svg.default}>
                <Ethereum />
              </div>
            </Grid.Column>
            <Grid.Column only="tablet" tablet={16} floated='right' style={styles.description}>
              <Header as='h1'>
                Read the latest headlines and articles
                <Header.Subheader>
                    The news brought to you has been aggregated from over 20 financial news sources. Read more over <Link to='/about'>here</Link>.
                </Header.Subheader>
              </Header>
            </Grid.Column>

            {/* Mobile Screen */}
            <Grid.Column textAlign="center" only="mobile" mobile={16} floated='left' style={{ order: 1 }}>
              <div style={{ ...styles.svg.default, ...styles.svg.mobile }}>
                <Ethereum />
              </div>
            </Grid.Column>
            <Grid.Column textAlign="center" only="mobile" mobile={16} floated='right' style={styles.description}>
              <Header as='h1' textAlign="center">
                Read the latest headlines and articles
                <Header.Subheader>
                  The news brought to you has been aggregated from over 20 financial news sources. Read more over <Link to='/about'>here</Link>.
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid>
        </Container>

      </Segment>
    );
  }
};

export default Initial;