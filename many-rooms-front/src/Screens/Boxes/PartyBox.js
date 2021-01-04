import React from 'react';
import Box from './Box';
import {innerBoxWrapper, boxTextStyle} from '../ScreenStyles'

export default class PartyBox extends Box {
    render() { 
        return (
            <div 
                style = {this.state.boxStyle}
                onMouseEnter = {this.handleMouseEnter}
                onMouseLeave = {this.handleMouseLeave}
            >
                <div style = {innerBoxWrapper} onClick = {() => 
                    window.location.pathname = `/p/${this.props.id}`
                }>
                    <p style = {boxTextStyle}>ID: {this.props.id}</p>
                    <p style = {boxTextStyle}>Attendees: {this.props.attendees}</p>
                    <p style = {boxTextStyle}>Posts: {this.props.posts}</p>
                    <p style = {boxTextStyle}>Host: {this.props.host}#{this.props.hostID}</p>
                    <p style = {boxTextStyle}>Title: {this.props.title}</p>
                </div>
            </div>
        );
    }
}