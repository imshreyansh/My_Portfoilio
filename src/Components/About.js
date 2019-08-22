import React, { Component } from 'react'
import './css/About.css'
import me from './icons/me.png'
class About extends Component {
    render() {
        return (
            <div className='main'>
                <div className='box'>
                    <div className='img'>
                        <img className='myImg' src={me} alt="" />
                    </div>
                    <div className='aboutText'>
                        <span className='Text'>I'm a Full Stack Developer from Varanasi, India !!</span>
                    </div>
                    <div className='aboutTextTwo'>
                        <span className='textTwo'>I enjoy taking complex problems and turning them into simple and beautiful application,
                    I also love the logic and structure of coding and always strive to write elegant and efficient code, Whether it be React Js, Node Js,Mongodb, HTML, CSS or Simple Javascript.</span>
                        <br />
                        <span className='textTwo'>When i am not coding or pushing pixels you'll find me playing PUBG or surfing Videos on Youtube or Singing.</span>
                        <br />
                        <span className='textTwo'>If you want to know more about me you can connect with me on Facebook, Instagram or Linkedin, Click on the above icons and connect.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default About