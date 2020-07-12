import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/naafi_photo.png';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
<b>Rebecca Isbell</b><br /> <em>Web Developer</em>
            <Social />
            </div>
            )
        }
    }

    export default Home
