import React, { Component } from 'react'
import './css/Projects.css'
import todo from './icons/todo.png'
class Projects extends Component {
    render() {
        return (
            <div className='main'>
                <div className='box'>
                    <div className='img'>
                        <img className='myImg' src={todo} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects