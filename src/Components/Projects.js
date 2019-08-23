import React, { Component } from 'react'
import './css/Projects.css'
import todo from './icons/todo.png'
import School from './Projects/School';
import WouldYouRather from './Projects/WouldYouRather'
import MyReads from './Projects/MyReads'
import MobileFlashcards from './Projects/MobileFlashcards'
import Contacts from './Projects/Contacts'

class Projects extends Component {
    render() {
        return (
            <div className='main'>
                <div className='box'>
                    <div className='img'>
                        <img className='myImg' src={todo} alt="" />
                    </div>
                    <div className="newCards">
                        <div className='cards'><School /></div>
                        <div className='cards'><WouldYouRather /></div>
                        <div className='cards'><MobileFlashcards /></div>
                        <div className='cards'><MyReads /></div>
                        <div className='cards'><Contacts /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects