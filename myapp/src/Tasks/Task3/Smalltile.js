import React, { Component } from 'react';
import Profile from './Profile';
import Button from './Button';
import Skills from './Skills';
import './smalltile.css'


export class Smalltile extends Component {
    constructor() {
        super()
        this.state = {
            Pro: "PRO",
            Name: 'Jiten Mohanty',
            Location: "BALASORE",
            Desg: "User interface designer and front-end devloper",
            Button1:"Message",
            Button2:"Following",
            Skills:"Skills",
            SkillsButton1:"UI/UX",
            SkillsButton2:"Front End Devlopment",
            SkillsButton3:"HTML",
            SkillsButton4:"CSS",
            SkillsButton5:"JavaScript",
            SkillsButton6:"React",
            SkillsButton7:"Node"

        }

    }

    render() {
        return (
            <div className="smalltile">
                <div className="profilebutton">
                    <Profile profile={this.state} />
                    <Button button={this.state}/>
                </div>
                <div className="skl">
                    <Skills Data={this.state}/>
                </div>

            </div>
        )
    }

}

export default Smalltile

