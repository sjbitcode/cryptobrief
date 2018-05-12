import React from 'react';
import { Header, Segment, Container, Grid, Button } from 'semantic-ui-react';

import Floating from '../../svg/Hello';


class About extends React.Component {

  renderTitle = () => {
    const styles = {
      svg: {
        margin: '0 auto',
        maxWidth: '300px',
        paddingTop: '30px'
      },

      container: {
        paddingTop: '0px',
        paddingBottom: '30px'
      },

      description: {
        padding: '100px'
      }
    };

    return (
      <Container textAlign='center' style={styles.container}>
        <Grid columns={2}>
          <Grid.Column style={styles.description}>
            <Header as='h1'>
              About Crypto Brief
            </Header>
            <p>
              Learn all about what powers Crypto Brief! It's exciting, I promise!
            </p>
          </Grid.Column>

          <Grid.Column>
            <div style={styles.svg}>
              <Floating />
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    )
  };

  render() {
    return (
      <Segment>
        {this.renderTitle()}
      </Segment>
    );
  }
};

export default About;