import React, { Component } from 'react';
import { boxTextStyle, innerBoxWrapper } from './ScreenStyles'; 

export default class Box extends Component {
    state = {
        boxStyle: {
            width:'16%',
            height:'100px',
            backgroundColor: '#f2f2f2',
            float:'left',
            marginRight: '4%',
            marginBottom: '25px',
            boxSizing: 'border-box',
            border: '2px solid transparent'
        }
    }

    handleMouseEnter = () => {
        const boxStyle = {...this.state.boxStyle};
        boxStyle.border = '2px solid black';
        this.setState({boxStyle});
    }

    handleMouseLeave = () => {
        const boxStyle = {...this.state.boxStyle};
        boxStyle.border = '2px solid transparent';
        this.setState({boxStyle});
    }

    render() {
        return (
            <div 
                style = {this.state.boxStyle}
                onMouseEnter = {this.handleMouseEnter}
                onMouseLeave = {this.handleMouseLeave}
            >
                <div style = {innerBoxWrapper}>
                    <p style = {boxTextStyle}>ID: 0001</p>
                    <p style = {boxTextStyle}>Attendees: 23</p>
                    <p style = {boxTextStyle}>Posts: 230</p>
                    <p style = {boxTextStyle}>Host: Sample_User#0001</p>
                    <p style = {boxTextStyle}>Title: This is a very long sample topic</p>
                </div>
            </div>
        );
    }
}