import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class AlertType extends React.Component {


  render() {
    const externalCloseBtn = 
    <button className="close" 
    style={{ opacity:1, position: 'absolute', top: '6%', right: '6%' }} 
    onClick={this.props.toggle}>
      <i className="material-icons md-36 text-light"> close</i>
    </button>;
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} external={externalCloseBtn}>
        <ModalHeader >{this.props.title}</ModalHeader>
        <ModalBody className="scroll">
          {this.props.content}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>Ok</Button>
        </ModalFooter>
      </Modal>

    );
  }
}