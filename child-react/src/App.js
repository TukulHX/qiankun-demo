import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Clock } from "./components/Clock";
import Home from './components/Home';
import Blog from './components/Blog';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock/>
        <Router>
          <Route exact path="/react/home" component={Home} />
          <Route exact path="/react/blog" component={Blog} />
        </Router>
      </div>
    );
  }
}
