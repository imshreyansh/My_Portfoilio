import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
import HomePage from './HomePage'
import logo from './logo.png'
import fb from './facebook.png'
import ln from './linkedin.png'
import In from './instagram.png'
import { BrowserRouter as Router, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <div className='both'>
          <div className='logo'>
            <img className='logoImg' src={logo} alt="" />
          </div>
          <div className='contact'>
            <a href="https://www.facebook.com/shreyansh.upadhyay02"><img className='ln' src={fb} alt="" /></a>
            <a href="https://in.linkedin.com/in/imshreyansh"><img className='fb' src={ln} alt="" /></a>
            <a href="https://www.instagram.com/imshreyansh_sk/"><img className='in' src={In} alt="" /></a>
          </div>
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
