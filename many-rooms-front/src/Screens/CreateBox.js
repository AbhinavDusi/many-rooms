import React from 'react';
import Box from './Box';
import {innerBoxWrapper, boxTextStyle} from './ScreenStyles';

export default class CreateBox extends Box {
    render() { 
        return (
            <div 
                style = {this.state.boxStyle}
                onMouseEnter = {this.handleMouseEnter}
                onMouseLeave = {this.handleMouseLeave}
            >
                <div style = {innerBoxWrapper} onClick = {() => {
                    window.location.pathname = this.props.floorURL + '/create'
                }}>
                    <p style = {boxTextStyle}>Create Party</p>
                </div>
            </div>
        );
    }
}