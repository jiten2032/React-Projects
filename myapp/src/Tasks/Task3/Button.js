import React from 'react';
import './button.css' ;

export default function Button(props) {
 
    return (
        <div className="button">
            <button className="message">{props.button.Button1}</button>
            <button className="following">{props.button.Button2}</button>
        </div>
    )
}
