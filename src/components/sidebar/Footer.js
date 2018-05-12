import React from 'react';
import { Container, List } from 'semantic-ui-react';


class Footer extends React.Component {
  render() {
    return (
      <Container textAlign='center'>
        <List>
          <List.Item>
            <List.Icon name='github' />
            <List.Content><a href='http://github.com/sjbitcode/cryptobrief' target='_blank'>Github Repo</a></List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='twitter' />
            <List.Content><a href='http://twitter.com/sjbitcode' target='_blank'>@sjbitcode</a></List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <a href='https://sangeeta.io' target='_blank'>sangeeta.io</a>
            </List.Content>
          </List.Item>
          <List.Item>
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