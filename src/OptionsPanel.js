import React, { Component } from 'react';

export default class OptionsPanel extends Component {
    render() {
        const divStyle = {
            float: 'left',
            height: '100%',
            width: '15%',
            backgroundColor: '#f2f2f2'
        }

        return (
            <div style = {divStyle}></div>
        );
    }
}