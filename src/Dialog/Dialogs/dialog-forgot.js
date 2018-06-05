import React, { Fragment } from 'react';
import { DialogWrapper } from '../../Dialog/dialog-wrapper.js'

export class DialogForgot extends React.Component {
  render() {
    return (
      <Fragment>
        <DialogWrapper show={this.props.show}   onClose={this.props.onClose} dialogType='forgot'  title='Forgot Password' subtitle='Enter Email Address to send instructions' />
      </Fragment>
    );
  }
}