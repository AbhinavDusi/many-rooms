import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, boxWrapper } from './ScreenStyles';
import PartyBox from './PartyBox';
import FriendBox from './FriendBox';

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
                        <PartyBox id = '000001'/>
                    </div>
                    <p style = {infoText}>Archived Parties</p>
                    <div style = {boxWrapper}>
                        <PartyBox id = '0001'/>
                    </div>
                    <p style = {infoText}>Friends</p>
                    <div style = {boxWrapper}>
                        <FriendBox />
                    </div>
                </div>
            </div>
        );
    }
}