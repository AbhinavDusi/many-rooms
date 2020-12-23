import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, secondaryHeader, infoText } from './ScreenStyles';

export default class SettingsScreen extends Component {
    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Adjust your Settings</p>
                    <p style = {infoText}>Change Display Name</p>
                    <p style = {infoText}>Change Email</p>
                    <p style = {infoText}>Change Password</p>
                </div>
            </div>
        );
    }
}