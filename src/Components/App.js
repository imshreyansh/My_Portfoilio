import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
import HomePage from './HomePage'
import logo from './logo.png'
import { BrowserRouter as Router, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <div className='logo'>
          <img className='logoImg' src={logo} alt="" />
        </div>
        <Router>
          <Route path='/todo' exact component={Todo} />
          <Route path='/' exact component={HomePage} />
        </Router>
      </div>
    )
  }
}

export default App;
