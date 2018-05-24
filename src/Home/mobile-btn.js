import React from 'react';


export class MobileBtn extends React.Component {
    render() {
        let status = "";
 
        if (this.props.menuVisibility) {
           status = "is-active";
        }
        return (
            <button onClick={this.props.handleOnClick}  className="mobile-btn btn d-md-none" type="button">
                <div className={status}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </button>
        );
    }
}