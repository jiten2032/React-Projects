import React, { Component } from 'react';
import './Jiten.css';

export class jiten extends Component {
    constructor() {
        super()
        this.state = {
            initial: 0
        }
    }
    handleClick = () => {

        this.setState({
            initial: this.state.initial + 1
        })


    }
    render() {
        return (
            <div className="button">
                <p>{this.state.initial}</p>
                <button onClick={this.handleClick}>add 1</button>
            </div>
        )
    }
}

export default jiten
