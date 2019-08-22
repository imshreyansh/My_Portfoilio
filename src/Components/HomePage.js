import React, { Component } from 'react'
import './css/HomePage.css'
import img from './icons/img.jpg'
import todo from './icons/todo.png'
import me from './icons/me.png'
import peeps from './icons/peeps.png'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class HomePage extends Component {
    render() {
        return (
            <div className='main'>
                <div className='box'>
                    <div className='img'>
                        <img className='myImg' src={img} alt="" />
                    </div>
                    <div className='nameHead'>
                        <span className='nameText'>SHREYANSH UPADHYAY</span>
                    </div>
                    <div className='nameHeadTwo'>
                        <span className='positionText'>Full Stack Developer</span>
                    </div>
                    <div className='details'>
                        <span className='motivation'>Motivation:</span>
                    </div>
                    <div className='details'>
                        <span className='detailsText'>Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.</span>
                    </div>
                    <div className='ico'>
                        <div className='spec'>
                            <Link to='/projects'> <img className='myImgOne' src={todo} alt="" /></Link>
                            <span className='di'>Projects</span>
                        </div>
                        <div className='spec'>
                            <Link to='/me'><img className='myImgOne' src={me} alt="" />
                            </Link>
                            <span className='di'>About Me !</span>
                        </div>
                        <div className='spec'>
                            <Link to='/collection'> <img className='myImgOne' src={peeps} alt="" /></Link>
                            <span className='di'>Collections</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default HomePage