import React from 'react';
import './skills.css';

export default function Skills(props) {
    return (
        <div className="skills">
            <h4>{props.Data.Skills}</h4>
            <div>
                <button>{props.Data.SkillsButton1}</button>
                <button>{props.Data.SkillsButton2}</button>
                <button>{props.Data.SkillsButton3}</button>
            </div>
            <div>
                <button>{props.Data.SkillsButton4}</button>
                <button>{props.Data.SkillsButton5}</button>
                <button>{props.Data.SkillsButton6}</button>
                <button>{props.Data.SkillsButton7}</button>
            </div>


        </div>
    )
}
