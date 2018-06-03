import React, { Fragment } from 'react';


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