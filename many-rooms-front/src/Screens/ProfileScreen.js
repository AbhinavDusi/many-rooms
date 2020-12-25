import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, boxWrapper } from './ScreenStyles';
import Box from './Box';

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
                    <div style = {boxWrapper}>
                        <Box />
                    </div>
                    <p style = {infoText}>Archived Parties</p>
                    <div style = {boxWrapper}>
                        <Box />
                    </div>
                    <p style = {infoText}>Friends</p>
                    <div style = {boxWrapper}>
                        <Box />
                    </div>
                </div>
            </div>
        );
    }
}