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
      triggerPrompt: ''
    };
    this.toggleDialog = this.toggleDialog.bind(this);
  }

  toggleDialog = (promptType) => {
    this.setState({
      isOpen: !this.state.isOpen,
      triggerPrompt: promptType
    });
  }

  render() {
    return (
      <Fragment>
        <HomeHeader dialogTrigger={this.toggleDialog} />
        <ServiceContent />
        <HomeFooter />
        <DialogConductor
          show={this.state.isOpen}
          onClose={this.toggleDialog}
          currentModal={this.state.triggerPrompt} />
      </Fragment>
    );
  }
}

Gotribeo.propTypes = {
  currentModal: PropTypes.string
};
