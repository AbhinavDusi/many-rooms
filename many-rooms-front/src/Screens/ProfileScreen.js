import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, secondaryHeader, infoText } from './ScreenStyles';

export default class ProfileScreen extends Component {
    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Your Profile</p>
                    <p style = {infoText}>Your Rooms</p>
                    <p style = {infoText}>Your Liked Rooms</p>
                    <p style = {infoText}>Your Friends</p>
                </div>
            </div>
        );
    }
}