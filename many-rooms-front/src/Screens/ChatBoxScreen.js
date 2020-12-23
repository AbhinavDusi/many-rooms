import React, { Component } from 'react';

export default class ChatBoxScreen extends Component {
    render() {
        const divStyle = {
            float: 'right',
            height: '100%',
            width: '85%',
            color:'black'
        }

        return (
            <div style = {divStyle}>Chat Box Screen</div>
        );
    }
}