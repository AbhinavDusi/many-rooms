import React, { Component } from 'react';

export default class SettingsScreen extends Component {
    render() {
        const outerDivStyle = {
            float: 'right',
            height: '100%',
            width: '85%'
        }

        return (
            <div style = {outerDivStyle}>
                Settings Screen
            </div>
        );
    }
}