import React, { Component } from 'react';
import './css/App.css';
import Todo from './Todo'
import HomePage from './HomePage'
import About from './About'
import Collection from './Collection'
import Projects from './Projects'
import logo from './icons/logo.png'
import house from './icons/house.png'
import fb from './icons/facebook.png'
import ln from './icons/linkedin.png'
import In from './icons/instagram.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
          <Route path='/todo' component={Todo} />
          <Route path='/My_Portfolio' exact component={HomePage} />
          <Route path='/My_Portfolio/me' exact component={About} />
          <Route path='/My_Portfolio/collection' exact component={Collection} />
          <Route path='/My_Portfolio/projects' exact component={Projects} />
          <div className='hous'>
            <Link to='/My_Portfolio'> <img className='house' src={house} alt="" /></Link>
          </div>
        </Router>

      </div>
    )
  }
}

export default App;
