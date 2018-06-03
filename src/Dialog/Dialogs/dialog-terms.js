import React, { Fragment } from 'react';
import { DialogWrapper } from '../../Dialog/dialog-wrapper.js'

export class DialogTerms extends React.Component {
  render() {
    return (
      <Fragment>
        <DialogWrapper show={this.props.show}   onClose={this.props.onClose} dialogType='alert'  title='Terms' />
      </Fragment>
    );
  }
}