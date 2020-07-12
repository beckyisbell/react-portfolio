import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Bachelor of Science in Communication Studies" where="Appalachian State University" from="2020" to="2022"/>
            <Widecard title="Associate of Applied Science in Web Development" where="Wake Tech" from="2016" to="2020"/>
            </div>
            )
        }
    }

export default Education
