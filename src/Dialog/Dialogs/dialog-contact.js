import React, { Fragment } from 'react';
import { DialogWrapper } from '../../Dialog/dialog-wrapper.js'

export class DialogContact extends React.Component {
  render() {
    return (
      <Fragment>
        <DialogWrapper show={this.props.show}   onClose={this.props.onClose} dialogType='contact'  title='Contact Us' />
      </Fragment>
    );
  }
}