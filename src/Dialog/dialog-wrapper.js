import React from 'react';
import { AlertType } from '../Dialog/Dialog-Type/alert-type.js'
import {SignupType } from '../Dialog/Dialog-Type/signup-type'
import {ContactType } from '../Dialog/Dialog-Type/contact-type'
import {LoginType } from '../Dialog/Dialog-Type/login-type'


export class DialogWrapper extends React.Component {
  render() {
    switch (this.props.dialogType) {
      case 'alert':
        return <AlertType content={this.props.content}  title={this.props.title} isOpen={this.props.show} toggle={this.props.onClose} />;
        case 'signup':
        return <SignupType content={this.props.content}  title={this.props.title} isOpen={this.props.show} toggle={this.props.onClose} />;
        case 'contact':
        return <ContactType content={this.props.content}  title={this.props.title} isOpen={this.props.show} toggle={this.props.onClose} />;
        case 'login':
        return <LoginType content={this.props.content}  title={this.props.title} isOpen={this.props.show} toggle={this.props.onClose} />;
      default:
        return null;
    }
  }
};