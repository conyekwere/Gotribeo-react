import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class ForgotType extends React.Component {

  constructor(props) {
    super(props);
    this.promptDialog = this.promptDialog.bind(this);
}

  promptDialog = (type) => { 
    this.props.toggle(type);
    setTimeout(function() { 
      this.props.toggle(type);
  }.bind(this), 10)
  }

  render() {
    const externalCloseBtn =
      <button className="close external"
        onClick={this.props.toggle}>
        <i className="material-icons md-36 text-light"> close</i>
      </button>;
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className} external={externalCloseBtn}>
        <ModalHeader >{this.props.title}
        <br/>
        <p className=" text-secondary">
        <small>
         {this.props.subtitle} 
        </small>
        </p>
        </ModalHeader>
        <ModalBody>
          <form name="forgotpwd" noValidate="">
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Email:</label>
              <input name="email" id="email" className="form-control input" required="" />
              <span className="hidden help-block">Email or phone number is required</span>
            </div>

          </form>
        </ModalBody>
        <ModalFooter>
        <Button color="success" >Send me reset instructions</Button>
          <div className="btn-flat text-secondary " onClick={this.props.toggle}>Cancel</div>
       
        </ModalFooter>
      </Modal>

    );
  }
}