import React, { Fragment } from 'react';
import { HomeHeader } from '../Home/home-header.js'
import { ServiceContent } from '../Home/service-content.js'
import { HomeFooter } from '../Home/home-footer.js'
import { Modal } from './Modal.js'
export class Gotribeo extends React.Component {
constructor(props) {
    super(props);

    this.state = { isOpen: false };
    }

    toggleModal = () => {
    this.setState({
        isOpen: !this.state.isOpen
    });
}
    render() {
        return (
            <Fragment>
                <HomeHeader modalTrigger={this.toggleModal} />
                <ServiceContent />
                <HomeFooter />
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    `This is a test`
                </Modal>
            </Fragment>
        );
    }
}