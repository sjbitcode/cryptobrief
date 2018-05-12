import React from 'react'
import { Button, Header, Modal, Label } from 'semantic-ui-react'

import '../style.css';


class NewsApiModal extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const inlineStyle = {
      modal: {
        marginTop: '0px !important',
        marginLeft: 'auto',
        marginRight: 'auto'
      },

      link: {
        cursor: 'pointer'
      }
    };

    return (
      <Modal
        trigger={<a style={inlineStyle.link} onClick={this.handleOpen}>here</a>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
        style={inlineStyle.modal}
      >
        <Header icon='newspaper' content='News sources we use' />
        <Modal.Content>
          <Label.Group color='teal' size='huge'>
            <Label>Google News</Label>
            <Label>Google News UK</Label>
            <Label>Google News CA</Label>
            <Label>CNBC</Label>
            <Label>Financial Times</Label>
            <Label>Bloomberg</Label>
            <Label>Independent</Label>
            <Label>Business Insider</Label>
            <Label>Crypto Coins News</Label>
            <Label>Financial Post</Label>
            <Label>TechCrunch</Label>
            <Label>The New York Times</Label>
            <Label>Time</Label>
            <Label>USA Today</Label>
            <Label>The Washington Times</Label>
            <Label>The Wall Street Journal</Label>
            <Label>Wired</Label>
            <Label>The Huffington Post</Label>
            <Label>Techradar</Label>
            <Label>The Economist</Label>
            <Label>Reuters</Label>
            <Label>Newsweek</Label>
            <Label>CNN</Label>
            <Label>ABC New</Label>
          </Label.Group>
        </Modal.Content>
        <Modal.Actions>
          <Button color='blue' onClick={this.handleClose} inverted>
            Ok
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default NewsApiModal;