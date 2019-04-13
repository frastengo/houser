import React, { Component } from 'react';

import Header from './components/Header/Header'

import routes from './routes'

import {HashRouter} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header/>
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
