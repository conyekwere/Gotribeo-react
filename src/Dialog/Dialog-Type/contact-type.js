import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class ContactType extends React.Component {


  render() {
    const externalCloseBtn = 
    <button className="close external" 
    onClick={this.props.toggle}>
      <i className="material-icons md-36 text-light"> close</i>
    </button>;
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} external={externalCloseBtn}>
        <ModalHeader >{this.props.title}</ModalHeader>
        <ModalBody>
        <form name="contact" noValidate="">
        <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Email:</label>
              <input name="email" id="email" className="form-control input" required="" />
              <span className="hidden help-block">Email or phone number is required</span>
            </div>
          <div className="form-group">
            <label htmlFor="full-name" className="col-form-label">Full Name:</label>
            <input type="text" className="form-control input" id="full-name"/>
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control input" id="message-text"></textarea>
          </div>
        </form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" >Send</Button>
          <div className="btn-flat text-secondary " onClick={this.props.toggle}>Cancel</div>
        </ModalFooter>
      </Modal>

    );
  }
}