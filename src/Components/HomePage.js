import React, { Component } from 'react'
import './HomePage.css'
import img from './img.jpg'
class HomePage extends Component {
    render() {
        return (
            <div className='main'>
                <div className='box'>
                    <div className='img'>
                        <img className='myImg' src={img} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage