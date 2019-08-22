import React, { Component } from 'react'
import './css/Collection.css'
import peeps from './icons/peeps.png'
class Collection extends Component {
    render() {
        return (
            <div className='main'>
                <div className='box'>
                    <div className='img'>
                        <img className='myImg' src={peeps} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Collection