import React, { Component } from 'react';
import { outerDivStyle } from './ScreenStyles';

export default class ChatBoxScreen extends Component {
    state = {
        rooms: [

        ]
    }

    render() {
        return (
            <div style = {outerDivStyle}>Floor Screen</div>
        );
    }
}