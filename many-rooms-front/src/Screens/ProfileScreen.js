import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText } from './ScreenStyles';

export default class ProfileScreen extends Component {
    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Sample_User#0001's Profile</p>
                    <p style = {infoText}>Created Rooms</p>
                    <p style = {infoText}>Liked Rooms</p>
                    <p style = {infoText}>Friends</p>
                </div>
            </div>
        );
    }
}