import React from 'react';


export class MobileNav extends React.Component {
    render() {
        let visibility = "hide";
 
        if (this.props.menuVisibility) {
          visibility = "show";
        }
        return ( 
            <div id="mobile-nav" className={visibility}>
                <ul className="navbar-nav ml-auto mr-0">
                    <li className="nav-item text-left">
                        <a className="text-light"><h3>Blog</h3></a>
                    </li>
                    <li className="nav-item text-left">
                        <a className="text-light"> <h3> Contact Us</h3> </a>
                    </li>
                    <li className="nav-item text-left">
                        <a className="text-light" ><h3>Log In</h3></a>
                    </li>
                    <li className="nav-item text-left">
                        <a className=" text-light"><h3>Sign Up</h3></a>
                    </li>
                </ul>
            </div>);
    }
}