import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText } from './ScreenStyles';

export default class ProfileScreen extends Component {
    state = {
        previousParties: [],
        archivedParties: [],
        friends: []
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Sample_User#0001's Room</p>
                    <p style = {infoText}>Previous Parties</p>
                    <p style = {infoText}>Archived Parties</p>
                    <p style = {infoText}>Friends</p>
                </div>
            </div>
        );
    }
}