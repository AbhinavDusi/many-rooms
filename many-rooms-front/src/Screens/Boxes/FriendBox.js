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
                <div style = {innerBoxWrapper} onClick = {() => window.location.pathname = '/profile'}>
                    <p style = {boxTextStyle}>Name: Sample_Friend#0001</p>
                </div>
            </div>
        );
    }
}