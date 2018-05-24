import React, { Component, Fragment } from 'react';
import {Gotribeo} from './Main/Gotribeo.js';
import './styles/App.css';

class App extends Component {
  
  render() {
    return (
      <Fragment>
      {/*  In the future I will add a redux async state for loading Gotribeo */}
        <Gotribeo/>
      </Fragment>
    );
  }
}


export default App;


