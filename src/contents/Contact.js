import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Contact Me</h1>
            <h3>Emai: beckyisbell92@gmail.com</h3>
            <h3>Instagram: @becky_sls</h3>
            <h3>Website: <a href="http://beckyisbell.com/portfolio" target="new">BeckyIsbell.com</a></h3>
            <Social />
            </div>
            )
        }
    }

    export default Contact
