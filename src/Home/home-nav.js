import React from 'react';
import logo from '../images/logo.png';


export class HomeNav extends React.Component {

  constructor(props) {
    super(props);
    this.promptDialog = this.promptDialog.bind(this);
}

  promptDialog = (type) => { 
     this.props.handleOnClick(type);
  }
    render() {
        return (<nav  style={{background: this.props.hasScrolled ? '#252857' : ''}}  className=" landing navbar-inverse navbar navbar-expand-md navbar-dark fixed-top bg-bootstrap">
            <a className="logo navbar-brand mr-0 mr-md-2">
                <img className="d-inline-block align-top" src={logo} alt="logo" />
                <div className=" font-weight-bold text-light d-inline-block align-middle hidden-xs logo-text"> Go
                    <span style={{color:'#0095da'}}>t</span>
                    <span style={{color:'#e7808e'}}>r</span>
                    <span style={{color:'#1dd1a1'}}>i</span>
                    <span style={{color:'#0095da'}}>b</span>
                    <span style={{color:'#e7808e'}}>e</span>
                    <span style={{color:'#feca57'}}>o</span>
                </div>
            </a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                <ul className="navbar-nav ml-auto mr-0">
                    <li onClick={() => this.promptDialog('ContactDialog')}  className="nav-item pointer">
                        <a className="nav-link">CONTACT US</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >BLOG</a>
                    </li>
                    <li  className="nav-item pointer">
                        <a className="nav-link" > LOG IN</a>                    
                    </li>
                    <li  onClick={() => this.promptDialog('SignUpDialog')}   className="nav-item pointer" type='SignUpDialog'>
                        <a className=" btn-nav nav-link" >SIGN UP</a>
                            {/*inverse data flow : call modal action type */}
                    </li>
    

                </ul>
            </div>
        </nav>);
    }
}



