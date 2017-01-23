import React, { Component } from 'react';
import {Router, Route, Link, browserHistory } from 'react-router';
import logo from './logo.svg';
import './App.css';

import Pokemons from './containers/list-container';
import Pokemon from './containers/list-item-container';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Pokemon}>
          <Route path="/pokemons" component={Pokemons}/>
        </Route>
      </Router>
        // <div className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <h2>Pokemon search</h2>
        // </div>

    );
  }
}

export default App;
