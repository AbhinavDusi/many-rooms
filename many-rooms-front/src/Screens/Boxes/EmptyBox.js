import React from 'react';
import Box from './Box';
import {innerBoxWrapper, boxTextStyle} from '../ScreenStyles';

export default class EmptyBox extends Box {
    render() { 
        return (
            <div 
                style = {this.state.boxStyle}
                onMouseEnter = {this.handleMouseEnter}
                onMouseLeave = {this.handleMouseLeave}
            >
                <div style = {innerBoxWrapper}>
                    <p style = {boxTextStyle}>{this.props.message}</p>
                </div>
            </div>
        );
    }
}