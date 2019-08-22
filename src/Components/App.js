import React, { Component } from 'react';
import './css/App.css';
import Todo from './Todo'
import HomePage from './HomePage'
import logo from './icons/logo.png'
import house from './icons/house.png'
import fb from './icons/facebook.png'
import ln from './icons/linkedin.png'
import In from './icons/instagram.png'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {

  Redirect = () => {
    console.log('khkh')
    return (
      <Redirect to='/' />
    )
  }

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
          <Route path='/todo' component={Todo} />
          <Route path='/' exact component={HomePage} />
        </Router>
        <div className='hous' onClick={() => this.Redirect()}>
          <img className='house' src={house} alt="" />
        </div>
      </div>
    )
  }
}

export default App;
