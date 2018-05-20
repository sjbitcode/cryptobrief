import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Container } from 'semantic-ui-react';


class GetStarted extends React.Component {
  static propTypes = {
    coins: PropTypes.object.isRequired
  }

  render() {
    const totalCoins = Object.keys(this.props.coins).length;

    const styles = {
      getStarted: {
        margin: '0 auto',
        textAlign: 'center'
      }
    };

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            {
              totalCoins === 0 ?

                <Container style={styles.getStarted}>
                  <Button fluid color='green' size='big' onClick={() => window.scrollTo(0, 0)}>Get started now</Button>
                </Container> :

                <Container style={styles.getStarted}>
                  <Button fluid color='green' size='big' onClick={() => window.scrollTo(0, 0)}>Search for another coin</Button>
                </Container>
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
};

export default GetStarted;
