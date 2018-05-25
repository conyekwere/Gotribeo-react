import React, { Fragment } from 'react';
import '../styles/home-header.css';


export class HomeFooter extends React.Component {
    render() {
        return (
            <Fragment>
            <footer className="col-md-12 copyright">
                <div>
                    ©
                    {(new Date().getFullYear())} Gotribeo
                </div>
            </footer>
            </Fragment>
        );
    }
}