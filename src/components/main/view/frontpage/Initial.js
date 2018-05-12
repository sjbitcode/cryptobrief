import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Container, Segment, Header, Button } from 'semantic-ui-react';

import Finance from '../../../svg/Finance';
import Ethereum from '../../../svg/Ethereum';


class Initial extends React.Component {
  render() {
    const styles = {
      svg: {
        finance: {
          margin: '0 auto'
        },

        ethereum: {
          margin: '0 auto',
          maxWidth: '300px'
        }
        
      },
      description: {
        padding: '100px'
      }
    };

    return (
      <Container>
      
      <Container>
          <Grid columns={2}>
            <Grid.Column style={styles.description}>
            <Header as='h1'>
              Keep track of your favorite cryptocurrencies
            </Header>
            <p>
              Have a coffee, then monitor the crypto that you invested
              a large chunk of your birthday money in.
            </p>
          </Grid.Column>

            <Grid.Column>
            <div style={styles.svg.finance}>
              <Finance />
            </div>
          </Grid.Column>
        </Grid>
      </Container>

      <Container>
          <Grid columns={2}>
            <Grid.Column floated='left' >
              <div style={styles.svg.ethereum}>
                <Ethereum/>
              </div>
            </Grid.Column>

            <Grid.Column floated='right' style={styles.description}>
            <Header as='h1'>
              Read the latest headlines and articles
            </Header>
            <p>
              The news brought to you has been aggregated from over 20 financial news sources. Read more over <Link to='/about'>here</Link>.
            </p>
          </Grid.Column>
        </Grid>
      </Container>

      {/* <Container color='green'>
        <Header as='h1'>Get started now</Header>
      </Container> */}
      </Container>
    );
  }
};

export default Initial;