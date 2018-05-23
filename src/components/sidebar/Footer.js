import React from 'react';
import { Container, List } from 'semantic-ui-react';


class Footer extends React.Component {
  render() {
    const styles = {
      display: 'flex',
      color: '#8ec5ef'
    };


    return (
      <Container textAlign='center'>
        <List>
          <List.Item style={styles}>
            <List.Icon name='github' />
            <List.Content className='footerLink'><a href='http://github.com/sjbitcode/cryptobrief' target='_blank' rel="noopener noreferrer">Github Repo</a></List.Content>
          </List.Item>
          <List.Item style={styles}>
            <List.Icon name='twitter' />
            <List.Content className='footerLink'><a href='http://twitter.com/sjbitcode' target='_blank' rel="noopener noreferrer">@sjbitcode</a></List.Content>
          </List.Item>
          <List.Item style={styles}>
            <List.Icon name='linkify' />
            <List.Content className='footerLink'>
              <a href='https://sangeeta.io' target='_blank' rel="noopener noreferrer">sangeeta.io</a>
            </List.Content>
          </List.Item>
          <List.Item style={styles}>
            <List.Icon name='code' />
            <List.Content>
              Sangeeta Jadoonanan
            </List.Content>
          </List.Item>
        </List>
      </Container>
    );
  }
}

export default Footer;