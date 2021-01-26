import React from 'react';
import Myimg from './Myimg.jpg';
import './profile.css';

export default function Profile(props) {

    return (
        <div className="profile">
            <button className="PRO">{props.profile.Pro}</button>
            <div className="imgcontent>">
                <img src={Myimg} alt="Myimg" width="200" height="200" className="img" />
                <h3>{props.profile.Name}</h3>
                <p>{props.profile.Location}</p>
                <p>{props.profile.Desg}</p>

            </div>
        </div>
    )
}
