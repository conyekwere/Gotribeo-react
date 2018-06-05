import React from 'react';
import { DialogSignup } from '../Dialog/Dialogs/dialog-signup.js'
import { DialogContact } from '../Dialog/Dialogs/dialog-contact.js'
import { DialogTerms } from '../Dialog/Dialogs/dialog-terms.js'
import { DialogPolicy } from '../Dialog/Dialogs/dialog-policy.js'
import { DialogLogin } from '../Dialog/Dialogs/dialog-login.js'
import { DialogForgot } from '../Dialog/Dialogs/dialog-forgot.js'


export class DialogConductor extends React.Component {
  render() {
    switch (this.props.currentModal) {
      case 'SignUpDialog':
        return <DialogSignup show={this.props.show} cta={this.props.signupInput} onClose={this.props.onClose} />;
        case 'ContactDialog':
        return <DialogContact show={this.props.show} onClose={this.props.onClose} />;
        case 'TermsDialog':
        return <DialogTerms show={this.props.show} onClose={this.props.onClose} />;
        case 'PolicyDialog':
        return <DialogPolicy show={this.props.show} onClose={this.props.onClose} />;
        case 'LoginDialog':
        return <DialogLogin show={this.props.show} onClose={this.props.onClose} />;
        case 'ForgotDialog':
        return <DialogForgot show={this.props.show} onClose={this.props.onClose} />;
      default:
        return null;
    }
  }
};
