import React from 'react';
import Box from './Box';
import {innerBoxWrapper, boxTextStyle} from './ScreenStyles'

export default class PartyBox extends Box {
    getPartyURL = id => {
        return '/f/anime'
    }

    render() { 
        return (
            <div 
                style = {this.state.boxStyle}
                onMouseEnter = {this.handleMouseEnter}
                onMouseLeave = {this.handleMouseLeave}
            >
                <div style = {innerBoxWrapper} onClick = {() => 
                    window.location.pathname = this.getPartyURL(this.props.id) + '/party'
                }>
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