import React from 'react';
import { Header, Segment, Container, Grid } from 'semantic-ui-react';

import Hello from '../../svg/Hello';
import NewsApiModal from './NewsApiModal';


class About extends React.Component {

  renderTitle = () => {
    const styles = {
      svg: {
        default: {
          padding: '20px'
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
            <Header as='h1' content='About Crypto Brief' subheader="Learn all about what powers Crypto Brief! It's exciting, I promise!"/>
          </Grid.Column>
          <Grid.Column only="computer" computer={8}>
            <div style={styles.svg.default}>
              <Hello />
            </div>
          </Grid.Column>

          {/* Tablet Screen */}
          <Grid.Column only="tablet" tablet={8} style={styles.description}>
            <Header as='h1' content='About Crypto Brief' subheader="Learn all about what powers Crypto Brief! It's exciting, I promise!" />
          </Grid.Column>
          <Grid.Column only="tablet" tablet={8}>
            <div style={styles.svg.default}>
              <Hello />
            </div>
          </Grid.Column>

          {/* Mobile Screen */}
          <Grid.Column textAlign="center" only="mobile" mobile={16} style={styles.description}>
            <Header as='h1' content='About Crypto Brief' subheader="Learn all about what powers Crypto Brief! It's exciting, I promise!" />
          </Grid.Column>
          <Grid.Column textAlign="center" only="mobile" mobile={16}>
            <div style={{ ...styles.svg.default, ...styles.svg.mobile}}>
              <Hello />
            </div>
          </Grid.Column>

        </Grid>

        <Container text textAlign='left' fluid style={{ marginTop: '60px' }}>
          <Header as='h3' content='What exactly is Crypto Brief?' />
          <p>
            Simply put, Crypto Brief answers the question of "How is [cryptocurrency] doing right now?"
  
            The idea behind this app was to build a tool that aggregates the latest news
            and price data for cryptocurrencies.
            
            Crypto Brief utilizes the <a href="https://coinmarketcap.com/" target='_blank' rel="noopener noreferrer">Coin Market Cap API</a> and <a href="https://newsapi.org/" target='_blank' rel="noopener noreferrer">News API</a> to bring you the latest
            on your favorite cryptocurrency.
          </p>
        </Container>

        <Container text textAlign='left' fluid style={{ marginTop: '60px' }}>
          <Header as='h3' content='Coin Market Cap API'/>
          <p>
            Crypto Brief uses the <a href="https://coinmarketcap.com/api/documentation/v1/" target='_blank' rel="noopener noreferrer">Coin Market Cap API v1</a> to gather price data on a specific
            cryptocurrency. Their data is updated every 5 minutes. Crypto Brief will be switching
            over to their newest API version soon!
          </p>
        </Container>

        <Container text textAlign='left' fluid style={{ marginTop: '60px' }}>
          <Header as='h3' content='News API' />
          <p>
            Crypto Brief uses <a href="https://newsapi.org/docs/endpoints/everything" target='_blank' rel="noopener noreferrer">News API v2</a> to gather news articles on a specific
            cryptocurrency. We gather news articles for a cryptocurrency from over 20 sources.
            Based on the data that gets returned, we display the last 10 articles based on relevancy.
            Click <NewsApiModal /> to see a list of the news sources we request data from.
          </p>
        </Container>

        <Container text textAlign='left' fluid style={{ marginTop: '60px' }}>
          <Header as='h3' content='The Tech Behind Crypto Brief' />
          <p>
            Crypto Brief is a React app using  
            <a href="https://github.com/facebook/create-react-app" target='_blank' rel="noopener noreferrer"> create-react-app</a>.
            It uses <a href="https://react.semantic-ui.com/introduction" target='_blank' rel="noopener noreferrer">Semantic-UI-React</a> for
            styling &amp; 
            <a href="https://undraw.co/illustrations" target='_blank' rel="noopener noreferrer"> unDraw illustrations</a> for the amazing svg's.
            Search suggestions are powered by the super helpful library <a href="https://github.com/moroshko/react-autosuggest" target='_blank' rel="noopener noreferrer">React-Autosuggest</a>.
            Last but not least, this app is hosted on <a href="https://aws.amazon.com/s3/" target='_blank' rel="noopener noreferrer">Amazon S3</a>.
          </p>
        </Container>
        
      </Container>
    )
  };

  render() {
    return (
      <Segment raised>
        {this.renderTitle()}
      </Segment>
    );
  }
};

export default About;