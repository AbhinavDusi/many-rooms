import React, { Component } from 'react';

export default class ChatBox extends Component {
    render() {
        const divStyle = {
            float: 'right',
            height: '100%',
            width: '85%',
        }

        return (
            <div style = {divStyle}></div>
        );
    }
}