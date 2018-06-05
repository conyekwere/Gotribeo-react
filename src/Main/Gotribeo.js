import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { HomeHeader } from '../Home/home-header.js'
import { ServiceContent } from '../Home/service-content.js'
import { HomeFooter } from '../Home/home-footer.js'
import { DialogConductor } from '../Dialog/dialog-conductor.js'

import '../styles/home-header.css';
import '../styles/Modal.css';

export class Gotribeo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      triggerPrompt: '',
      value:''
    };
    this.toggleDialog = this.toggleDialog.bind(this);
     this.bindValue = this.bindValue.bind(this);
  }

  toggleDialog = (promptType) => {
    this.setState({
      isOpen: !this.state.isOpen,
      triggerPrompt: promptType
    });
  }
bindValue = (inputValue) => {
    this.setState({
      value: inputValue
    });
  }
  render() {
    return (
      <Fragment>
        <HomeHeader dialogTrigger={this.toggleDialog} 
        ctaTrigger ={this.bindValue}/>
               {/* research secure way to move input data */}
        <ServiceContent />
        <HomeFooter />
        <DialogConductor
          show={this.state.isOpen}
          onClose={this.toggleDialog}
          signupInput={this.state.value}
    currentModal={this.state.triggerPrompt} />
      </Fragment>
 
    );
  }
}

Gotribeo.propTypes = {
  currentModal: PropTypes.string
};
