import React, { Component } from 'react';

export default class ChatBoxScreen extends Component {
    render() {
        const outerDivStyle = {
            float: 'right',
            height: '100%',
            width: '85%'
        }

        return (
            <div style = {outerDivStyle}>
                Create Room Screen
            </div>
        );
    }
}