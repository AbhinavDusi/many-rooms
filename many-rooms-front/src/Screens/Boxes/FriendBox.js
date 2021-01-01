import React from 'react';
import Box from './Box';
import {innerBoxWrapper, boxTextStyle} from '../ScreenStyles';

export default class FriendBox extends Box {
    render() { 
        return (
            <div 
                style = {this.state.boxStyle}
                onMouseEnter = {this.handleMouseEnter}
                onMouseLeave = {this.handleMouseLeave}
            >
                <div 
                    style = {innerBoxWrapper} 
                    onClick = {() => window.location.pathname = `/profile/${this.props.id}`}
                >
                    <p style = {boxTextStyle}>Name: {this.props.username}#{this.props.id}</p>
                </div>
            </div>
        );
    }
}