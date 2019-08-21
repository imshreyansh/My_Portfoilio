import React, { Component } from 'react'
import './HomePage.css'
import img from './img.jpg'
import todo from './todo.png'
import me from './me.png'
import peeps from './peeps.png'
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
                        <img className='myImgOne' src={todo} alt="" />
                        <img className='myImgOne' src={me} alt="" />
                        <img className='myImgOne' src={peeps} alt="" />
                    </div>

                </div>
            </div>
        )
    }
}

export default HomePage